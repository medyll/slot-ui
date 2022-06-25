```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        label: string;
        icon: string;
        /** can be set as a prop or as a className */ stacked?: boolean | undefined;
        component?: SvelteComponent | undefined;
        componentProps?: Record<string, any> | undefined;
        isOpen?: boolean | undefined;
        /** use to control cartouche */ actions?: {
            open: () => void;
            toggle: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cartoucheIconSlot: {};
        primarySlot: {};
        cartoucheActionSlot: {};
        default: {};
    };
};

 ```
