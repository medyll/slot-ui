```import { SvelteComponentTyped } from "svelte";
export declare type SortItem = {};
export declare type Data = Record<string, any>;
declare const __propDef: {
    props: {
        /** Sorter mode */ sorterMode?: "button" | "menu" | "free" | undefined;
        /** binding : final sorted data as raw object  */ sortedData?: SortItem[] | undefined;
        /** list of available sorts shown to user */ sortListItems?: string[] | undefined;
        /** data to sort */ data: Data[];
        /** field from data to sort by*/ sortByField?: string | undefined;
        /** presented field from data to sort by*/ sortByTitleField?: string | undefined;
        /** order on which the sorted list is sorted */ sortByOrder?: string | undefined;
        /** binding, used when multiple buttons*/ activeCommonSortField?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            primary: string | undefined;
            icon: string;
            iconFamily: string;
            selected: boolean;
            size: string;
            showChip: boolean;
        };
    };
};
export declare type SorterProps = typeof __propDef.props;
export declare type SorterEvents = typeof __propDef.events;
export declare type SorterSlots = typeof __propDef.slots;
export default class Sorter extends SvelteComponentTyped<SorterProps, SorterEvents, SorterSlots> {
}
export {};

 ```