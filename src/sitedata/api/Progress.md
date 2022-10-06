```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /**    base     */ percentBase?: number | undefined;
        /**   score */ value?: number | undefined;
        /** can be vertical or horizontal */ direction?: "vertical" | "horizontal" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```