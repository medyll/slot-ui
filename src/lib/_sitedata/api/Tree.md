```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: Data[] | undefined;
        paths?: Record<string, any>[] | undefined;
        pathField?: string | undefined;
        pathes?: TreeItemType<Record<string, any>>[] | undefined;
        level?: number | undefined;
        selectedDataKeys?: string[] | undefined;
        /** ed data */ selectedData?: Data[] | undefined;
        /** ed selected paths */ selectedPathes?: string[] | undefined;
        /** the split we use to build hierarchy */ splitter?: string | undefined;
        selectedCategory?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: TreeItemType<Record<string, any>>;
        };
    };
};

 ```