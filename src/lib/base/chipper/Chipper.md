```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        style?: string | undefined;
        position?: "left" | "right" | "top" | "bottom" | undefined;
        /** sho or hide the chip */ showChip?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        chipperChip: {};
    };
};

 ```