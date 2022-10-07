```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        icon?: string | undefined;
        size?: "small" | "tiny" | "medium" | "large" | "full" | undefined;
        iconSize?: "default" | "small" | "tiny" | "medium" | "large" | "big" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        badge: {};
        default: {};
    };
};

 ```