import type { IChromeArgs } from './types';
export declare function getChromeFrame(frameId: string | number): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<IChromeArgs<Record<string, any>> | undefined>, invalidate?: ((value?: IChromeArgs<Record<string, any>> | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    updatePos: (position: IChromeArgs['position']) => void;
    remove: () => void;
    makeOnTop: () => void;
    minimize: () => void;
    toggle: () => void;
};
/** open a chrome frame in DOM and add it to the store **/
export declare function openChromeFrame(frameId: string, args?: Partial<IChromeArgs>): void;
