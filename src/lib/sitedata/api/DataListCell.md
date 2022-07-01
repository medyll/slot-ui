```typescript 
__propDef: {
    props: {
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        columnId?: string | number | undefined;
        /** if data has been provided, then cell got a fieldName */ dataField: string;
        /** set noWrap =true to have ellipsis on cell content*/ noWrap?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```