using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using RoarUI.Utilities;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Linq.Expressions;

namespace RoarUI.Components.Input;

public abstract class RoarInputBase<TValue> : ComponentBase, IDisposable
{
    private readonly EventHandler<ValidationStateChangedEventArgs> _validationStateChangedHandler;

    private bool _hasInitializedParameters;
    private bool _parsingFailed;
    private string? _incomingValueBeforeParsing;
    private string? _formattedValueExpression;
    private bool _previousParsingAttemptFailed;
    private ValidationMessageStore? _parsingValidationMessages;
    private Type? _nullableUnderlyingType;
    internal Dictionary<string, object> InternalAttributes = [];

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public IReadOnlyDictionary<string, object>? AdditionalAttributes { get; set; }

    [CascadingParameter]
    private EditContext? CascadedEditContext { get; set; }

    [CascadingParameter]
    private RoarHtmlFieldPrefix? FieldPrefix { get; set; }

    /// <summary>
    /// The value of the input, submitted as a name/value pair with form data.
    /// </summary>
    [Parameter]
    public virtual TValue? Value { get; set; }

    /// <summary>
    /// Gets or sets a callback that updates the bound value.
    /// </summary>
    [Parameter]
    public EventCallback<TValue> ValueChanged { get; set; }

    /// <summary>
    /// Gets or sets an expression that identifies the bound value.
    /// </summary>
    [Parameter]
    public Expression<Func<TValue>>? ValueExpression { get; set; }

    /// <summary>
    /// Gets the associated <see cref="Microsoft.AspNetCore.Components.Forms.EditContext"/>.
    /// This property is uninitialized if the input does not have a parent <see cref="EditForm"/>.
    /// </summary>
    protected EditContext EditContext { get; set; } = default!;

    /// <summary>
    /// Gets the <see cref="FieldIdentifier"/> for the bound value.
    /// </summary>
    protected internal FieldIdentifier FieldIdentifier { get; set; }

    internal virtual bool FieldBound => ValueExpression is not null || ValueChanged.HasDelegate;
    internal ElementReference Element { get; set; }

    protected async Task SetCurrentValueAsync(TValue? value)
    {
        bool hasChanged = !EqualityComparer<TValue>.Default.Equals(value, Value);
        if (!hasChanged)
        {
            return;
        }

        _parsingFailed = false;

        // If we don't do this, then when the user edits from A to B, we'd:
        // - Do a render that changes back to A
        // - Then send the updated value to the parent, which sends the B back to this component
        // - Do another render that changes it to B again
        // The unnecessary reversion from B to A can cause selection to be lost while typing
        // A better solution would be somehow forcing the parent component's render to occur first,
        // but that would involve a complex change in the renderer to keep the render queue sorted
        // by component depth or similar.
        Value = value;
        if (ValueChanged.HasDelegate)
        {
            // Thread Safety: Force `ValueChanged` to be re-associated with the Dispatcher, prior to invocation.
            await InvokeAsync(async () => await ValueChanged.InvokeAsync(value));
        }

        if (FieldBound)
        {
            // Thread Safety: Force `EditContext` to be re-associated with the Dispatcher
            await InvokeAsync(() => EditContext?.NotifyFieldChanged(FieldIdentifier));
        }
    }

    /// <summary>
    /// Gets or sets the current value of the input.
    /// </summary>
    protected TValue? CurrentValue
    {
        get => Value;
        set => _ = SetCurrentValueAsync(value);
    }

    /// <summary>
    /// Gets or sets the current value of the input, represented as a string.
    /// </summary>
    protected string? CurrentValueAsString
    {
        // InputBase-derived components can hold invalid states (e.g., an InputNumber being blank even when bound
        // to an int value). So, if parsing fails, we keep the rejected string in the UI even though it doesn't
        // match what's on the .NET model. This avoids interfering with typing, but still notifies the EditContext
        // about the validation error message.
        get => _parsingFailed ? _incomingValueBeforeParsing : FormatValueAsString(CurrentValue);
        set => _ = SetCurrentValueAsStringAsync(value);

    }

    /// <summary>
    /// Attempts to set the current value of the input, represented as a string.
    /// </summary>
    /// <param name="value"></param>
    protected async Task SetCurrentValueAsStringAsync(string? value)
    {
        _incomingValueBeforeParsing = value;
        _parsingValidationMessages?.Clear();

        if (_nullableUnderlyingType != null && string.IsNullOrEmpty(value))
        {
            // Assume if it's a nullable type, null/empty inputs should correspond to default(T)
            // Then all subclasses get nullable support almost automatically (they just have to
            // not reject Nullable<T> based on the type itself).
            _parsingFailed = false;
            CurrentValue = default!;
        }
        else if (TryParseValueFromString(value, out var parsedValue, out string? validationErrorMessage))
        {
            _parsingFailed = false;
            await SetCurrentValueAsync(parsedValue);
        }
        else
        {
            _parsingFailed = true;

            // EditContext may be null if the input is not a child component of EditForm.
            if (EditContext is not null && FieldBound)
            {
                _parsingValidationMessages ??= new ValidationMessageStore(EditContext);
                _parsingValidationMessages.Add(FieldIdentifier, validationErrorMessage);

                // Since we're not writing to CurrentValue, we'll need to notify about modification from here
                EditContext.NotifyFieldChanged(FieldIdentifier);
            }
        }

        // We can skip the validation notification if we were previously valid and still are
        if (_parsingFailed || _previousParsingAttemptFailed)
        {
            EditContext?.NotifyValidationStateChanged();
            _previousParsingAttemptFailed = _parsingFailed;
        }
    }

    /// <summary>
    /// Constructs an instance of <see cref="InputBase{TValue}"/>.
    /// </summary>
    protected RoarInputBase() => _validationStateChangedHandler = OnValidateStateChanged;

    /// <summary>
    /// Formats the value as a string. Derived classes can override this to determine the formating used for <see cref="CurrentValueAsString"/>.
    /// </summary>
    /// <param name="value">The value to format.</param>
    /// <returns>A string representation of the value.</returns>
    protected virtual string? FormatValueAsString(TValue? value) => value?.ToString();

    /// <summary>
    /// Gets the value to be used for the input's name attribute.
    /// </summary>
    protected string NameAttributeValue
    {
        get
        {
            if (AdditionalAttributes?.TryGetValue("name", out object? nameAttributeValue) ?? false)
            {
                return Convert.ToString(nameAttributeValue, CultureInfo.InvariantCulture) ?? string.Empty;
            }

            if (ValueExpression is not null)
            {
                return GetFieldName();
            }

            return field;
        }
    } = $"roar-{Guid.NewGuid():N}";

    private string GetFieldName() => _formattedValueExpression ??=
        FieldPrefix?.GetFieldName(ValueExpression!) ?? RoarExpressionFormatter.FormatLambda(ValueExpression!);

    /// <summary>
    /// Parses a string to create an instance of <typeparamref name="TValue"/>. Derived classes can override this to change how
    /// <see cref="CurrentValueAsString"/> interprets incoming values.
    /// </summary>
    /// <param name="value">The string value to be parsed.</param>
    /// <param name="result">An instance of <typeparamref name="TValue"/>.</param>
    /// <param name="validationErrorMessage">If the value could not be parsed, provides a validation error message.</param>
    /// <returns>True if the value could be parsed; otherwise false.</returns>
    protected abstract bool TryParseValueFromString(string? value, [MaybeNullWhen(false)] out TValue result, [NotNullWhen(false)] out string? validationErrorMessage);

    /// <inheritdoc />
    public override Task SetParametersAsync(ParameterView parameters)
    {
        parameters.SetParameterProperties(this);

        if (!_hasInitializedParameters)
        {
            if (ValueExpression is not null)
            {
                FieldIdentifier = FieldIdentifier.Create(ValueExpression);
            }
            else if (ValueChanged.HasDelegate)
            {
                FieldIdentifier = FieldIdentifier.Create(() => Value);
            }

            if (CascadedEditContext != null)
            {
                EditContext = CascadedEditContext;
                EditContext.OnValidationStateChanged += _validationStateChangedHandler;
            }

            _nullableUnderlyingType = Nullable.GetUnderlyingType(typeof(TValue));
            _hasInitializedParameters = true;
        }
        else if (CascadedEditContext != EditContext)
        {
            // Not the first run

            // We don't support changing EditContext because it's messy to be clearing up state and event
            // handlers for the previous one, and there's no strong use case. If a strong use case
            // emerges, we can consider changing this.
            throw new InvalidOperationException($"{GetType()} does not support changing the {nameof(Microsoft.AspNetCore.Components.Forms.EditContext)} dynamically.");
        }

        UpdateAdditionalValidationAttributes();

        return base.SetParametersAsync(ParameterView.Empty);
    }

    private void OnValidateStateChanged(object? sender, ValidationStateChangedEventArgs eventArgs)
    {
        UpdateAdditionalValidationAttributes();
        InvokeAsync(StateHasChanged);
    }

    private void UpdateAdditionalValidationAttributes() => InternalAttributes = new AttributeBuilder(AdditionalAttributes)
        .AddConditionalAttributeWhenMissing(FieldBound && EditContext is not null && EditContext.GetValidationMessages(FieldIdentifier).Any(), "aria-invalid", "true")
        .AddAttributeWhenMissing("name", NameAttributeValue)
        .Build();

    /// <inheritdoc />
    protected virtual void Dispose(bool disposing)
    {
    }

    void IDisposable.Dispose()
    {
        EditContext?.OnValidationStateChanged -= _validationStateChangedHandler;
        Dispose(true);
    }
}
