using System.ComponentModel.DataAnnotations;

namespace RoarUI.Validations;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter)]
public sealed class CheckboxGroupRequiredAttribute : ValidationAttribute
{
    public CheckboxGroupRequiredAttribute() => ErrorMessage = "{0} requires at least one checked option.";

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext) => value switch
    {
        null => new ValidationResult(FormatErrorMessage(validationContext.DisplayName), validationContext.MemberName is not null ? [validationContext.MemberName] : null),

        IEnumerable<bool> boolValues => boolValues.Any(x => x) ? ValidationResult.Success : new ValidationResult(FormatErrorMessage(validationContext.DisplayName), validationContext.MemberName is not null ? [validationContext.MemberName] : null),

        _ => new ValidationResult($"{validationContext.DisplayName} must be a collection of boolean values.")
    };
}