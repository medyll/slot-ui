```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        element?: HTMLDivElement | undefined;
        stickyHeader?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DataListHeadProps = typeof __propDef.props;
export declare type DataListHeadEvents = typeof __propDef.events;
export declare type DataListHeadSlots = typeof __propDef.slots;
export default class DataListHead extends SvelteComponentTyped<DataListHeadProps, DataListHeadEvents, DataListHeadSlots> {
    get style(): undefined;
}
export {};

 ```