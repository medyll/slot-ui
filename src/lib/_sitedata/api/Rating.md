```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /**    maximum rate     */ ratingBase?: number | undefined;
        /** current score */ scored?: number | undefined;
        /** default icon to be used when not using slots */ defaultIcon?: string | undefined;
        /** scored icon to be used when not using slots */ scoredIcon?: string | undefined;
        /** can be vertical or horizontal */ direction?: "vertical" | "horizontal" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        scoredSlot: {};
        default: {};
    };
};

 ```