```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        breadList?: {
            action?: (() => void) | undefined;
            breads?: {
                text: string;
                icon: string;
                link?: string | undefined;
                data?: Record<string, any> | undefined;
            }[] | undefined;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```