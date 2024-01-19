```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        isOpen?: boolean | undefined;
        showCloseControl?: boolean | undefined;
        hasMenu?: boolean | undefined;
        title?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        content?: string | undefined;
        bottomZone?: string | undefined;
        actions?: Record<"close" | "toggle" | "open", Function> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        titleBarTitle: {
            slot: string;
        };
        titleBarIcon: {
            slot: string;
        };
        default: {};
        boxBottomZone: {};
    };
};

 ```