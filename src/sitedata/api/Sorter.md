```typescript 
__propDef: {
    props: {
        /** Sorter mode */ sorterMode?: "button" | "menu" | undefined;
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
        default: {};
    };
};

 ```