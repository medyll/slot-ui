```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /** is the datalist sortable */ isSortable?: boolean | undefined;
        /** order on which the sorted list is sorted */ sortByOrder?: string | undefined;
        /** binding, used when multiple buttons*/ activeCommonSortField?: string | undefined;
        /** set noWrap = true to have ellipsis on all cells content*/ noWrap?: boolean | undefined;
        /** represents your data types used to display values */ dataTypes?: Record<string, any> | undefined;
        /** data to loop  trought */ data?: any[] | undefined;
        /** used only if data is provided */ idField?: string | undefined;
        sortingIcons?: {
            default: string[];
            numeric: string[];
        } | undefined;
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

 ```