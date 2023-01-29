```import { SvelteComponentTyped } from "svelte";
import type { DataCellType, groupByOptions } from "./types.js";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /** show or hide the dataList body */ hideBody?: boolean | undefined;
        /** show or hide the dataList headere */ showHeader?: boolean | undefined;
        /** is the datalist sortable */ isSortable?: boolean | undefined;
        /** order on which the sorted list is sorted */ sortByOrder?: string | undefined;
        /** group field on which data will be grouped, can use dot notation as dot path */ groupByField?: string | string[] | undefined;
        /** options used when props.groupByField is defined */ groupByOptions?: groupByOptions | undefined;
        fieldValue: any;
        /** field used for selection*/ selectorField?: string | undefined;
        /** field value used for selection*/ selectorFieldValue?: any | undefined;
        /** binding, used when multiple buttons*/ activeCommonSortField?: string | undefined;
        /** set noWrap = true to have ellipsis on all cells content*/ noWrap?: boolean | undefined;
        /** represents your data types used to display values */ dataTypes?: Record<string, any> | undefined;
        /** data to loop  trought */ data?: any[] | undefined;
        /** used only if data is provided */ idField?: string | undefined;
        /** columns declaration */ columns?: Record<string, DataCellType> | undefined;
        virtualizer?: boolean | undefined;
        isLoading?: boolean | undefined;
        sortingIcons?: {
            default: string[];
            numeric: string[];
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        groupTitleSlot: {
            item: any;
        };
        dataListCell: {
            fieldName: string;
            fieldType: string | undefined;
            fieldRawValue: string;
            fieldValue: string;
        };
        default: {
            rawData: any;
            item: any;
        };
        head: {};
        dataListFooter: {};
    };
};
export declare type DataListProps = typeof __propDef.props;
export declare type DataListEvents = typeof __propDef.events;
export declare type DataListSlots = typeof __propDef.slots;
export default class DataList extends SvelteComponentTyped<DataListProps, DataListEvents, DataListSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get hideBody(): boolean | undefined;
    /**accessor*/
    set hideBody(_: boolean | undefined);
    get showHeader(): boolean | undefined;
    /**accessor*/
    set showHeader(_: boolean | undefined);
    get isSortable(): boolean | undefined;
    /**accessor*/
    set isSortable(_: boolean | undefined);
    get sortByOrder(): string | undefined;
    /**accessor*/
    set sortByOrder(_: string | undefined);
    get groupByField(): string | string[] | undefined;
    /**accessor*/
    set groupByField(_: string | string[] | undefined);
    get groupByOptions(): groupByOptions | undefined;
    /**accessor*/
    set groupByOptions(_: groupByOptions | undefined);
    get fieldValue(): any;
    /**accessor*/
    set fieldValue(_: any);
    get selectorField(): string | undefined;
    /**accessor*/
    set selectorField(_: string | undefined);
    get selectorFieldValue(): any;
    /**accessor*/
    set selectorFieldValue(_: any);
    get activeCommonSortField(): string | undefined;
    /**accessor*/
    set activeCommonSortField(_: string | undefined);
    get noWrap(): boolean | undefined;
    /**accessor*/
    set noWrap(_: boolean | undefined);
    get dataTypes(): Record<string, any> | undefined;
    /**accessor*/
    set dataTypes(_: Record<string, any> | undefined);
    get data(): any[] | undefined;
    /**accessor*/
    set data(_: any[] | undefined);
    get idField(): string | undefined;
    /**accessor*/
    set idField(_: string | undefined);
    get columns(): Record<string, DataCellType> | undefined;
    /**accessor*/
    set columns(_: Record<string, DataCellType> | undefined);
    get virtualizer(): boolean | undefined;
    /**accessor*/
    set virtualizer(_: boolean | undefined);
    get isLoading(): boolean | undefined;
    /**accessor*/
    set isLoading(_: boolean | undefined);
    get sortingIcons(): {
        default: string[];
        numeric: string[];
    } | undefined;
    /**accessor*/
    set sortingIcons(_: {
        default: string[];
        numeric: string[];
    } | undefined);
}
export {};

 ```