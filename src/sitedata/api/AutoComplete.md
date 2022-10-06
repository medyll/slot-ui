```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        defaultField?: string | undefined;
        showSortMenu?: boolean | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        noResultsSlot: {};
        loadingSlot: {};
    };
};

 ```