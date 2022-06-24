```typescript 
__propDef: {
    props: {
        /** common slotUi s*/ class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** end slotUi s*/ elementNav?: HTMLDivElement | null | undefined;
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
        contentHeaderFrameSlot: {};
        contentFrameSlot: {};
    };
};

 ```