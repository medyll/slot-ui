import type { ElementProps } from '../../../types';
declare type ListStoreType = {
    activeData: Record<string, any>;
    activeItem: Record<string, any>;
    selectorField: string;
    density: ElementProps['density'];
};
export declare const createListStore: <T = ListStoreType>() => {
    subscribe: (this: void, run: import("svelte/store").Subscriber<ListStoreType>, invalidate?: ((value?: ListStoreType | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: ListStoreType) => void;
    update: (this: void, updater: import("svelte/store").Updater<ListStoreType>) => void;
    setSelectorField: (selectorField: string) => void;
    setActiveData: (data: any) => void;
    setActiveItem: (data: any) => void;
    selector: (field: string, data: Record<string, any>) => boolean;
};
export {};
