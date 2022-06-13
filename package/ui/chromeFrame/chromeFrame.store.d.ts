import type { IChromeFrameArgs, IChromeOptionsFrameArgs } from './types';
export declare type WindowStoreListType = Map<string | number, IChromeFrameArgs>;
export declare const windowListObjects: Map<string | number, IChromeFrameArgs<Record<string, any>>>;
export declare const chromeFrameStore: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<WindowStoreListType>, invalidate?: ((value?: WindowStoreListType | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    activeFrame: import("svelte/store").Writable<string | number>;
    defaultConfigStore: import("svelte/store").Writable<IChromeOptionsFrameArgs<Record<string, any>>>;
    create: (payload: IChromeFrameArgs) => void;
    open: (payload: IChromeFrameArgs) => void;
    close: (frameId: string | number) => void;
    minimize: (frameId: string | number) => void;
    toggle: (frameId: string | number) => void;
    remove: (frameId: string | number) => void;
    updatePos: (frameId: string | number, position: IChromeFrameArgs['position']) => void;
    makeOnTop: (frameId: string | number) => void;
    reset: () => void;
};
export declare const chromeFrameListRef: Record<string, any>;
