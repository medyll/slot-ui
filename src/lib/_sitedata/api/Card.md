```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** vertical alignments of content */ alignment?: "center" | "left" | "right" | undefined;
        /** carried data */ data?: ElementProps['data'] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cardHeroSlot: {};
        title: {};
        cardContentSlot: {};
        default: {};
        footer: {};
    };
};

 ```