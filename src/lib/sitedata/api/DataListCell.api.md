```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        columnId?: string | number | undefined;
        /** if data has been provided, then cell got a fieldName and coumnId is defined */ dataField?: string | undefined;
        /** typeof the dataField. Used when exists Datalist.$$props.dataTypes */ dataFieldType?: string | undefined;
        /** set noWrap = true to have ellipsis on this cell content*/ noWrap?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            fieldData: import("../../../types").Data;
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