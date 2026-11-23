import type { IconLibrary } from './library.js';
export type SystemIcons = {
    [variant: string]: {
        [name: string]: string;
    };
};
export declare const icons: SystemIcons;
declare const systemLibrary: IconLibrary;
export default systemLibrary;
