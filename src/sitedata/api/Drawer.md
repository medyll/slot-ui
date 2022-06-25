```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        title: string | undefined;
        /** Should the drawer be open */ isOpen?: boolean | undefined;
        /** Should the closer icon be hidden */ hideCloseIcon?: boolean | undefined;
        /**
           * position
           * @type 'wide' | 'inplace'
           */ position?: "wide" | "inplace" | undefined;
        stickTo?: "left" | "right" | undefined;
        showOpenerIcon?: boolean | undefined;
        toggle?: ((visibleSate?: boolean | undefined) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        topBarSlot: {};
        default: {};
        drawerBottomBarSlot: {};
    };
};

 ```
