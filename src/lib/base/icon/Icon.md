```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        fontSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        rotate?: boolean | undefined;
        color?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```