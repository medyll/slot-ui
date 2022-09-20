```typescript 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        fontSize?: "small" | "tiny" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    };
    events: {
        click: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```