```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        classRoot?: string | undefined;
        styleRoot?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        defaultField?: string | undefined;
        showSortMenu?: boolean | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
        sizeRoot?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        size?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```