import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        head: {};
        default: {
            item: any;
        };
        foot: {};
    };
};
export declare type DataListProps = typeof __propDef.props;
export declare type DataListEvents = typeof __propDef.events;
export declare type DataListSlots = typeof __propDef.slots;
export default class DataList extends SvelteComponentTyped<DataListProps, DataListEvents, DataListSlots> {
}
export {};
