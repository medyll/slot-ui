```ts 
__propDef: {
    props: {
        /**  className off the root component  */ class?: string | undefined;
        /**  css style off the root component  */ style?: string | undefined;
        /** element root HTMLDivElement props  */ element?: HTMLDivElement | null | undefined;
        /** displayed title of the cartouche */ primary?: string | undefined;
        /** displayed sub title of the cartouche */ secondary?: string | undefined;
        icon?: string | undefined;
        /** can be set as a prop or as a className */ stacked?: boolean | undefined;
        component?: SvelteComponent | undefined;
        componentProps?: Record<string, any> | undefined;
        /** show the title divider line */ showTitleDivider?: boolean | undefined;
        /** show the default border style */ bordered?: boolean | undefined;
        isOpen?: boolean | undefined;
        /** component actions
             * @type {Record<'open'|'toggle' | 'close', Function>}
             */ actions?: Record<"close" | "toggle" | "open", Function> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cartoucheIcon: {};
        primarySlot: {};
        secondarySlot: {};
        cartoucheButtons: {};
        default: {};
    };
};

 ```