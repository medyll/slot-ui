import type { MenuProps } from './types';
export declare const createMenuStore: <T = MenuProps<any>>() => {
    subscribe: (this: void, run: import("svelte/store").Subscriber<MenuProps<any>>, invalidate?: ((value?: MenuProps<any> | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: MenuProps<any>) => void;
    update: (this: void, updater: import("svelte/store").Updater<MenuProps<any>>) => void;
};
