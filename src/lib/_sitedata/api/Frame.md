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
        frameHeaderSlot: {};
        navLeftHeaderFrameSlot: {};
        frameDrawerSlot: {};
        contentHeader: {};
        content: {};
        bottom: {};
    };
};

 ```