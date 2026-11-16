using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Reflection;
using YamlDotNet.Core;
using YamlDotNet.Serialization;

namespace RoarUI.Theme.Yaml;

internal static class YamlThemeReader
{
    private static readonly IDeserializer Deserializer = new DeserializerBuilder().WithDuplicateKeyChecking().Build();
    private static readonly Dictionary<Type, Dictionary<string, PropertyInfo>> ThemeProperties = new()
    {
        [typeof(RoarTheme)] = GetProperties<RoarTheme>(),
        [typeof(ThemeTokens)] = GetProperties<ThemeTokens>(),
        [typeof(BorderTokens)] = GetProperties<BorderTokens>(),
        [typeof(ColorPalette)] = GetProperties<ColorPalette>(),
        [typeof(SchemeColors)] = GetProperties<SchemeColors>(),
        [typeof(VariantColors)] = GetProperties<VariantColors>(),
        [typeof(VariantSchemeColors)] = GetProperties<VariantSchemeColors>(),
        [typeof(FocusRingTokens)] = GetProperties<FocusRingTokens>(),
        [typeof(ShadowTokens)] = GetProperties<ShadowTokens>(),
        [typeof(SpacingTokens)] = GetProperties<SpacingTokens>(),
        [typeof(TransitionTokens)] = GetProperties<TransitionTokens>(),
        [typeof(TypographyTokens)] = GetProperties<TypographyTokens>(),
        [typeof(ComponentTokens)] = GetProperties<ComponentTokens>()
    };

    public static async Task<RoarTheme> ReadAsync(Stream stream)
    {
        using var reader = new StreamReader(stream, leaveOpen: true);
        string yaml = await reader.ReadToEndAsync();

        if (Deserializer.Deserialize<object>(yaml) is not Dictionary<object, object?> document)
        {
            throw new InvalidOperationException("The theme document must contain a theme object.");
        }

        var theme = new RoarTheme();
        Populate(theme, document);

        return theme;
    }

    private static void Populate(object target, Dictionary<object, object?> mapping)
    {
        var properties = ThemeProperties[target.GetType()];
        foreach (var (key, value) in mapping)
        {
            string name = ReadKey(key);

            if (properties.TryGetValue(name, out var property))
            {
                ApplyProperty(target, property, value);
            }
        }
    }

    private static void ApplyProperty(object target, PropertyInfo property, object? value)
    {
        var type = property.PropertyType;
        switch (value)
        {
            case string text when type == typeof(string):
                property.SetValue(target, text);
                break;
            case string text when type == typeof(int) && int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number):
                property.SetValue(target, number);
                break;
            case null when !type.IsValueType:
                property.SetValue(target, null);
                break;
            case Dictionary<object, object?> mapping when property.GetValue(target) is Dictionary<string, VariantColors> variants:
                PopulateVariants(variants, mapping);
                break;
            case Dictionary<object, object?> mapping when ThemeProperties.ContainsKey(type) && property.GetValue(target) is { } child:
                Populate(child, mapping);
                break;
            default:
                throw new YamlException($"Invalid value for theme property '{property.Name}'.");
        }
    }

    private static void PopulateVariants(Dictionary<string, VariantColors> variants, Dictionary<object, object?> mapping)
    {
        foreach (var (key, value) in mapping)
        {
            string name = ReadKey(key);

            if (value is not Dictionary<object, object?> variantMapping)
            {
                if (value is not null)
                {
                    throw new YamlException($"Expected a mapping for theme variant '{name}'.");
                }

                variants[name] = null!;
                continue;
            }

            var variant = variants.GetValueOrDefault(name) ?? new VariantColors();
            Populate(variant, variantMapping);
            variants[name] = variant;
        }
    }

    private static string ReadKey(object key) => key as string ?? throw new YamlException("Theme keys must be strings.");

    private static Dictionary<string, PropertyInfo> GetProperties<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicProperties)] T>() => typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance)
            .Where(property => property.SetMethod?.IsPublic == true)
            .ToDictionary(property => typeof(T) == typeof(RoarTheme) && property.Name == nameof(RoarTheme.Schema) ? "$schema" : property.Name, StringComparer.OrdinalIgnoreCase);
}
