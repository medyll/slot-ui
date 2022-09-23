```import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
import type { DataListStoreType, CellType } from './types.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /** is the datalist sortable */ isSortable?: boolean | undefined;
        /** order on which the sorted list is sorted */ sortByOrder?: string | undefined;
        /** order on which the sorted list is sorted */ groupByField?: string | undefined;
        /** binding, used when multiple buttons*/ activeCommonSortField?: string | undefined;
        /** set noWrap = true to have ellipsis on all cells content*/ noWrap?: boolean | undefined;
        /** represents your data types used to display values */ dataTypes?: Record<string, any> | undefined;
        /** data to loop  trought */ data?: any[] | undefined;
        /** used only if data is provided */ idField?: string | undefined;
        /** @deprecated columns declaration */ columns?: CellType[] | undefined;
        /** columns declaration */ columnsDef?: CellType[] | undefined;
        sortingIcons?: {
            default: string[];
            numeric: string[];
        } | undefined;
        /** context store for dataList config and state */ dataListStore?: Writable<DataListStoreType> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        groupTitleSlot: {
            item: any;
        };
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

 ```