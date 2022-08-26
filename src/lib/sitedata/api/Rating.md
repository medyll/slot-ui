```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /**    maximum rate     */ ratingBase?: number | undefined;
        /** current score */ scored?: number | undefined;
        /** default icon to be used when not using slots */ defaultIcon?: string | undefined;
        /** scored icon to be used when not using slots */ scoredIcon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        scoredSlot: {};
    };
};

 ```