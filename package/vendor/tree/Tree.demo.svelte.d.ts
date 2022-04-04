import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TreeProps = typeof __propDef.props;
export declare type TreeEvents = typeof __propDef.events;
export declare type TreeSlots = typeof __propDef.slots;
export default class Tree extends SvelteComponentTyped<TreeProps, TreeEvents, TreeSlots> {
}
export {};
