```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        searchField?: string | undefined;
        dataFieldName?: string | string[] | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
        selectedIndex?: number | undefined;
        onPick?: ((args: any) => void) | undefined;
    };
    events: {
        pick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            menuItemData: any;
        };
        emptySearchString: {};
        emptySearch: {};
    };
};

 ```