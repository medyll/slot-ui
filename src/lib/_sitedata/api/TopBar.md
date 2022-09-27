```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | null | undefined;
        title: string | undefined;
        orientation?: "left" | "right" | undefined;
        contentSwitcherIcon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        iconSlot: {};
        menuBarTitle: {};
        menuBarButtons: {};
        menuBarSwitcher: {};
    };
};

 ```