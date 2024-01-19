```ts 
__propDef: {
    props: {
        /**  className off the root component  */ class?: string | undefined;
        /**  css style off the root component  */ style?: string | undefined;
        /** element root HTMLDivElement props  */ element?: HTMLDivElement | null | undefined;
        /** title of the drawer */ primary?: string | undefined;
        /** sub-title of the drawer */ secondary?: string | undefined;
        /** icon of the drawer */ icon?: string | undefined;
        /** Should the drawer be open */ isOpen?: boolean | undefined;
        /** Should the closer icon be hidden */ hideCloseIcon?: boolean | undefined;
        /**
             * flow
             * @type "fixed" | "relative" | "absolute"
             */ flow?: "relative" | "absolute" | "fixed" | undefined;
        /**  stickTo
             * @type {'right' | 'left' | 'top' | 'bottom'}
             */ stickTo?: "left" | "right" | "top" | "bottom" | undefined;
        showOpenerIcon?: boolean | undefined;
        toggle?: ((visibleSate?: boolean) => void) | undefined;
        /** should be used  */ actions?: {
            toggle: (visibleSate?: boolean) => void;
        } | undefined;
        /** default width of the drawer in vertical mode */ defaultWidth?: string | undefined;
        /** minimum width of the drawer in vertical mode and closed state */ defaultVisibleArea?: string | undefined;
        /** default height of the drawer in horizontal mode */ defaultHeight?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        iconSlot: {};
        drawerTop: {};
        default: {};
        drawerBottom: {};
    };
};

 ```