```ts 
__propDef: {
    props: {
        [x: string]: any;
        type?: string | undefined;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        iconColor?: string | undefined;
        endIcon?: string | undefined;
        endIconColor?: string | undefined;
        usePopper?: UsePopperProps | undefined;
        size?: "small" | "tiny" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        height?: string | undefined;
        borderless?: boolean | undefined;
        transparent?: boolean | undefined;
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        startInputSlot: {};
        endInputSlot: {};
    };
};

 ```