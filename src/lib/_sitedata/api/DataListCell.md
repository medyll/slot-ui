```ts 
__propDef: {
    props: {
        [x: string]: any;
        element?: HTMLElement | undefined;
        style?: string | undefined;
        field?: string | undefined;
        fieldType?: string | undefined;
        columnId?: string | number | undefined;
        noWrap?: boolean | undefined;
        title?: string | undefined;
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