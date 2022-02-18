export declare const createMenuStore: <T = any>() => {
    subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: ((value?: any) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: any) => void;
    update: (this: void, updater: import("svelte/store").Updater<any>) => void;
};
