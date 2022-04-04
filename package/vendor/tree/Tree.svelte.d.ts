import { SvelteComponentTyped } from "svelte";
import type { PathsType, TreeItemType } from './types';
declare const __propDef: {
    props: {
        paths?: PathsType | undefined;
        pathField?: string | undefined;
        pathes?: TreeItemType[] | undefined;
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
    get paths(): PathsType | undefined;
    /**accessor*/
    set paths(_: PathsType | undefined);
    get pathField(): string | undefined;
    /**accessor*/
    set pathField(_: string | undefined);
    get pathes(): TreeItemType[] | undefined;
    /**accessor*/
    set pathes(_: TreeItemType[] | undefined);
}
export {};
