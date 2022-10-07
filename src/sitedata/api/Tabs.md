```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: TabsItemsProps | undefined;
        activeTabCode?: string | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
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