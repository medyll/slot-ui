```ts 
__propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: TabsItemsProps | undefined;
        activeTabCode?: string | undefined;
        /** orientation */ orientation?: "vertical" | "horizontal" | undefined;
        onTabClick?: ((item: Items) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tabsFirstTitleSlot: {};
        tabLabelSlot: {
            item: Items;
        };
        tabsTitleSlot: {};
        tabsButtonSlot: {};
        commandBarSlot: {};
        default: {
            item: Items;
            activeTabCode: string;
        };
        innerTabSlot: {
            item: Items;
            activeTabCode: string;
        };
    };
};

 ```