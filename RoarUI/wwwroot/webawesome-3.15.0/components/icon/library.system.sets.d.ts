import type { SystemIcons } from './library.system.js';
export declare const systemIconSets: {
    [folder: string]: () => Promise<{
        default: SystemIcons;
    }>;
};
