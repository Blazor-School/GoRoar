export declare class WaSuggestionsErrorEvent extends Event {
    readonly detail: WaSuggestionsErrorEventDetail;
    constructor(detail: WaSuggestionsErrorEventDetail);
}
interface WaSuggestionsErrorEventDetail {
    /** The error the data source rejected with. */
    error: unknown;
    /** The request that failed (without its abort signal). */
    request: {
        /** The trigger character of the source that failed. */
        trigger: string;
        query: string;
    };
}
declare global {
    interface GlobalEventHandlersEventMap {
        'wa-suggestions-error': WaSuggestionsErrorEvent;
    }
}
export {};
