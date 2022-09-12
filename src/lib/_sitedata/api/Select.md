```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        data?: ElementProps['data'] | undefined;
        options?: {
            data?: Record<string, any> | undefined;
            text: string;
            icon?: any;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            option: {
                data?: Record<string, any> | undefined;
                text: string;
                icon?: any;
            };
        };
    };
};

 ```