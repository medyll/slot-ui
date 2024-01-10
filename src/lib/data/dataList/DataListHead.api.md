```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        element?: HTMLDivElement | undefined;
        stickyHeader?: boolean | undefined;
        onSort?: Function | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DataListHeadProps = typeof __propDef.props;
export type DataListHeadEvents = typeof __propDef.events;
export type DataListHeadSlots = typeof __propDef.slots;
export default class DataListHead extends SvelteComponent<DataListHeadProps, DataListHeadEvents, DataListHeadSlots> {
}
export {};

 ```