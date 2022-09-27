```ts 
__propDef: {
    props: {
        icon?: string | undefined;
        /** displayed as H5*/ primary?: string | undefined;
        /** secondary title */ secondary?: string | undefined;
        action?: string | undefined;
        density?: "default" | "medium" | "none" | "tight" | "kind" | undefined;
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