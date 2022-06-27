```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** title of the drawer */ primary?: string | undefined;
        /** sub-title of the drawer */ secondary?: string | undefined;
        /** icon of the drawer */ icon?: string | undefined;
        /** Should the drawer be open */ isOpen?: boolean | undefined;
        /** Should the closer icon be hidden */ hideCloseIcon?: boolean | undefined;
        /**
             * position
             * @type 'wide' | 'inplace'
             */ flow?: "fixed" | "relative" | "absolute" | undefined;
        stickTo?: "left" | "right" | "top" | "bottom" | undefined;
        showOpenerIcon?: boolean | undefined;
        toggle?: ((visibleSate?: boolean | undefined) => void) | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        iconSlot: {};
        topBarSlot: {};
        default: {};
        drawerBottomBarSlot: {};
    };
};

 ```