import type { IChromeArgs } from './types';
export declare type WindowStoreListType = Map<string | number, IChromeArgs>;
export declare const windowListObjects: Map<string | number, IChromeArgs>;
export declare const chromeFrameStore: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<WindowStoreListType>, invalidate?: ((value?: WindowStoreListType | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    activeFrame: import("svelte/store").Writable<string | number>;
    create: (payload: IChromeArgs) => void;
    open: (payload: IChromeArgs) => void;
    close: (frameId: string | number) => void;
    minimize: (frameId: string | number) => void;
    toggle: (frameId: string | number) => void;
    remove: (frameId: string | number) => void;
    updatePos: (frameId: string | number, position: IChromeArgs['position']) => void;
    makeOnTop: (frameId: string | number) => void;
    reset: () => void;
};
export declare const chromeFrameListRef: Record<string, any>;
