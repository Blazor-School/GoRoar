/** @internal Sets the default icon family and, optionally, the default variant. */
export declare function setDefaultIconFamilyAndVariant(family: string, variant?: string): void;
/**
 * Gets the default icon family. Unless set with `setDefaultIconFamily()`, this is read from the first element with a
 * `data-fa-family` attribute, falling back to `classic`.
 */
export declare function getDefaultIconFamily(): string;
/**
 * Gets the default icon variant. Unless set with `setDefaultIconFamily()`, this is read from the first element with a
 * `data-fa-variant` attribute, falling back to `solid`.
 */
export declare function getDefaultIconVariant(): string;
