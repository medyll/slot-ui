```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        field?: string | undefined;
        fieldType?: string | undefined;
        columnId?: string | number | undefined;
        noWrap?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            fieldData: any;
        };
    };
};
export declare type DataListCellProps = typeof __propDef.props;
export declare type DataListCellEvents = typeof __propDef.events;
export declare type DataListCellSlots = typeof __propDef.slots;
export default class DataListCell extends SvelteComponentTyped<DataListCellProps, DataListCellEvents, DataListCellSlots> {
}
export {};

 ```