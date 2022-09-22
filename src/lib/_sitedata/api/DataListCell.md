```typescript 
__propDef: {
    props: {
        [x: string]: any;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        columnId?: string | number | undefined;
        dataField?: string | undefined;
        dataFieldType?: string | undefined;
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