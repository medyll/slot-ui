```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        defaultField?: string | undefined;
        dataFieldName?: string | string[] | undefined;
        showSortMenu?: boolean | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
        selectedIndex?: number | undefined;
        onPick?: ((args: any) => void) | undefined;
    };
    events: {
        select: CustomEvent<any>;
        pick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            filteredData: any[];
        };
        emptySearchString: {};
        emptySearch: {};
        noResultsSlot: {};
        loadingSlot: {};
    };
};

 ```