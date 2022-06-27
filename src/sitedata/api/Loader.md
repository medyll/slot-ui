```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        isLoading?: boolean | undefined;
        isError?: boolean | undefined;
        isEmpty?: boolean | undefined;
        /** icon sources */ iconisLoading?: string | undefined;
        iconisError?: string | undefined;
        iconisEmpty?: string | undefined;
        /** message to display */ message?: string | undefined;
        /** used if message props is omitted */ messages?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```