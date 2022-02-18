export declare type IChromeArgs = {
    frameId: string | number;
    title?: string;
    open?: boolean;
    minimized?: boolean;
    maximized?: boolean;
    active?: boolean;
    secondaryTitle?: string;
    description?: string;
    onClose?: () => {};
    onCancel?: () => {};
    onValidate?: () => {};
    component?: any;
    componentProps?: any;
    zIndex?: number;
    position?: {
        x: number;
        y: number;
    };
    defaultPosition?: {
        x: number;
        y: number;
    };
};
export declare type WindowStoreListType = Map<string | number, IChromeArgs>;
export declare const windowListObjects: Map<string | number, IChromeArgs>;
export declare function createWindowStore(): {
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
export declare const windowsStore: {
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
export declare function getAppWindowStore(frameId: string | number): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<IChromeArgs | undefined>, invalidate?: ((value?: IChromeArgs | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    updatePos: (position: IChromeArgs['position']) => void;
    remove: () => void;
    makeOnTop: () => void;
};
