```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        elementNav?: HTMLDivElement | null | undefined;
        frameDrawerRef?: typeof Drawer | undefined;
        hideCloseIcon?: boolean | undefined;
        showOpenerIcon?: boolean | undefined;
        drawerWidth?: string | undefined;
        actions?: {
            openNavLeft: () => void;
            toggleNavLeft: () => void;
            closeNavLeft: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        navLeftHeaderFrameSlot: {};
        drawerTop: {
            slot: string;
        };
        drawerContent: {};
        frameTop: {};
        content: {};
        frameBottom: {};
    };
};

 ```