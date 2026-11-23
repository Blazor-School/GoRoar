import type WaIcon from '../icon/icon.js';
export type IconLibraryHostElement = WaIcon;
export type IconLibraryResolver = (name: string, family: string, variant: string, autoWidth: boolean) => string | Promise<string>;
export type IconLibraryMutator = (svg: SVGElement, hostElement?: IconLibraryHostElement) => void;
export interface IconLibrary {
    name: string;
    resolver: IconLibraryResolver;
    mutator?: IconLibraryMutator;
    spriteSheet?: boolean;
}
/** Adds an icon to the list of watched icons. */
export declare function watchIcon(icon: WaIcon): void;
/** Removes an icon from the list of watched icons. */
export declare function unwatchIcon(icon: WaIcon): void;
/** Returns a library from the registry. */
export declare function getIconLibrary(name?: string): IconLibrary | undefined;
/** Adds an icon library to the registry, or overrides an existing one. */
export declare function registerIconLibrary(name: string, options: Omit<IconLibrary, 'name'>): void;
/** Removes an icon library from the registry. */
export declare function unregisterIconLibrary(name: string): void;
export { getDefaultIconFamily, getDefaultIconVariant } from './library.config.js';
/**
 * Sets the default icon family and, optionally, the default variant. These apply to icons that don't specify their own
 * `family` or `variant`, including the system icons used inside components. When `variant` is omitted, the current
 * default variant is kept. The defaults can also be set with `data-fa-family` and `data-fa-variant` attributes.
 */
export declare function setDefaultIconFamily(family: string, variant?: string): void;
