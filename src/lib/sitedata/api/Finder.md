```typescript 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        data?: any;
        defaultField?: string | undefined;
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