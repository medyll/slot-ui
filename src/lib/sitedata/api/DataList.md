```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /** is the datalist sortable */ isSortable?: boolean | undefined;
        /** order on which the sorted list is sorted */ sortByOrder?: string | undefined;
        /** binding, used when multiple buttons*/ activeCommonSortField?: string | undefined;
        data?: any[] | undefined;
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