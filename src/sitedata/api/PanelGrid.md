```ts 
__propDef: {
    props: {
        data: any | undefined;
        columns?: number | undefined;
        isExpanded?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: unknown;
        };
        zoomSlot: {};
    };
};

 ```