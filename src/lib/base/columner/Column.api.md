```import { SvelteComponent } from "svelte";
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
        drawerTop: {};
        default: {};
        bottomSLot: {};
    };
};
export type ColumnProps = typeof __propDef.props;
export type ColumnEvents = typeof __propDef.events;
export type ColumnSlots = typeof __propDef.slots;
export default class Column extends SvelteComponent<ColumnProps, ColumnEvents, ColumnSlots> {
}
export {};

 ```