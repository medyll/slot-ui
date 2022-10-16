```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        columnId?: string | undefined;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        topSlot: {};
        default: {};
        bottomSLot: {};
    };
};
export declare type ColumnProps = typeof __propDef.props;
export declare type ColumnEvents = typeof __propDef.events;
export declare type ColumnSlots = typeof __propDef.slots;
export default class Column extends SvelteComponentTyped<ColumnProps, ColumnEvents, ColumnSlots> {
}
export {};

 ```