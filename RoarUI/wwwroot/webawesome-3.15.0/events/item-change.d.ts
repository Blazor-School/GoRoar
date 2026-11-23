import type WaLightboxItem from '../components/lightbox-item/lightbox-item.js';
export declare class WaItemChangeEvent extends Event {
    readonly detail: WaItemChangeEventDetail;
    constructor(detail: WaItemChangeEventDetail);
}
interface WaItemChangeEventDetail {
    /** The zero-based index of the item that's now current. */
    index: number;
    /** The index of the item that was current before, or `-1` if none was. */
    previousIndex: number;
    /** The item that's now current. */
    item: WaLightboxItem;
    /** The item that was current before, or `null` if none was. */
    previousItem: WaLightboxItem | null;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'wa-item-change': WaItemChangeEvent;
    }
}
export {};
