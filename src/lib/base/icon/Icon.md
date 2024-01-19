```ts 
__propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | any;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        fontSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        rotate?: boolean | undefined;
        color?: string | undefined;
        rotation?: number | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```