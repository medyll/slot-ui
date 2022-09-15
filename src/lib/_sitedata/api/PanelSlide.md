```typescript 
__propDef: {
    props: {
        open: boolean;
        actions?: {
            open: () => void;
            close: () => void;
            toggle: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```