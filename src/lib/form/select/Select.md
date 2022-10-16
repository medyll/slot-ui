```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        style?: string | undefined;
        name: string;
        disabled?: boolean | undefined;
        data?: ElementProps["data"] | undefined;
        dataFieldId?: string | undefined;
        dataFieldName?: string | undefined;
        options?: {
            data?: Record<string, any> | undefined;
            text: string;
            icon?: any;
        }[] | undefined;
        position?: ElementProps["position"] | undefined;
        stickToHookWidth?: boolean | undefined;
        autoClose?: boolean | undefined;
        value?: any | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            optionsData: {
                data?: Record<string, any> | undefined;
                text: string;
                icon?: any;
            };
        };
    };
};

 ```