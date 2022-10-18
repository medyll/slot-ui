```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        /** displayed as H5*/ primary?: string | undefined;
        /** secondary title */ secondary?: string | undefined;
        action?: string | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        primary: {};
        secondary: {};
        default: {};
        action: {};
    };
};

 ```