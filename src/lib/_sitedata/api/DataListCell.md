```typescript 
__propDef: {
    props: {
        [x: string]: any;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        field?: string | undefined;
        fieldType?: string | undefined;
        columnId?: string | number | undefined;
        noWrap?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            fieldData: any;
        };
    };
};

 ```