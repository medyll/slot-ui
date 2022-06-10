import { SvelteComponentTyped } from "svelte";
import type { PathDataType, TreeItemType } from './types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        paths?: PathDataType[] | undefined;
        pathField?: string | undefined;
        pathes?: TreeItemType<Record<string, any>>[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
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
    get paths(): PathDataType[] | undefined;
    /**accessor*/
    set paths(_: PathDataType[] | undefined);
    get pathField(): string | undefined;
    /**accessor*/
    set pathField(_: string | undefined);
    get pathes(): TreeItemType<Record<string, any>>[] | undefined;
    /**accessor*/
    set pathes(_: TreeItemType<Record<string, any>>[] | undefined);
}
export {};
