```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | undefined;
        parent?: HTMLElement | undefined;
        component?: any | undefined;
        componentProps?: Record<string, any> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```