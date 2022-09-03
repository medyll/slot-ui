```import { SvelteComponentTyped } from "svelte";
import type { TreeItemType } from './types';
import type { Data } from '$types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: Data[] | undefined;
        paths?: Record<string, any>[] | undefined;
        pathField?: string | undefined;
        pathes?: TreeItemType<Record<string, any>>[] | undefined;
        level?: number | undefined;
        selectedDataKeys?: string[] | undefined;
        /** exported data */ selectedData?: Data[] | undefined;
        /** exported selected paths */ selectedPathes?: string[] | undefined;
        /** the split we use to build hierarchy */ splitter?: string | undefined;
        selectedCategory?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: TreeItemType<Record<string, any>>;
        };
    };
};
export declare type TreeProps = typeof __propDef.props;
export declare type TreeEvents = typeof __propDef.events;
export declare type TreeSlots = typeof __propDef.slots;
export default class Tree extends SvelteComponentTyped<TreeProps, TreeEvents, TreeSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get data(): Data[] | undefined;
    /**accessor*/
    set data(_: Data[] | undefined);
    get paths(): Record<string, any>[] | undefined;
    /**accessor*/
    set paths(_: Record<string, any>[] | undefined);
    get pathField(): string | undefined;
    /**accessor*/
    set pathField(_: string | undefined);
    get pathes(): TreeItemType<Record<string, any>>[] | undefined;
    /**accessor*/
    set pathes(_: TreeItemType<Record<string, any>>[] | undefined);
    get level(): number | undefined;
    /**accessor*/
    set level(_: number | undefined);
    get selectedDataKeys(): string[] | undefined;
    /**accessor*/
    set selectedDataKeys(_: string[] | undefined);
    get selectedData(): Data[] | undefined;
    /**accessor*/
    set selectedData(_: Data[] | undefined);
    get selectedPathes(): string[] | undefined;
    /**accessor*/
    set selectedPathes(_: string[] | undefined);
    get splitter(): string | undefined;
    /**accessor*/
    set splitter(_: string | undefined);
    get selectedCategory(): string | undefined;
    /**accessor*/
    set selectedCategory(_: string | undefined);
}
export {};

 ```