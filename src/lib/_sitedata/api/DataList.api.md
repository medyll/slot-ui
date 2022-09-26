```import { SvelteComponentTyped } from "svelte";
import type { CellType } from './types.js';
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
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        groupTitleSlot: {
            item: any;
        };
        head: {
            onSort: (e: CustomEvent<{
                field: string;
                order: string;
            }>) => void;
        };
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
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get isSortable(): boolean | undefined;
    /**accessor*/
    set isSortable(_: boolean | undefined);
    get sortByOrder(): string | undefined;
    /**accessor*/
    set sortByOrder(_: string | undefined);
    get groupByField(): string | undefined;
    /**accessor*/
    set groupByField(_: string | undefined);
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
    get columns(): CellType[] | undefined;
    /**accessor*/
    set columns(_: CellType[] | undefined);
    get columnsDef(): CellType[] | undefined;
    /**accessor*/
    set columnsDef(_: CellType[] | undefined);
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