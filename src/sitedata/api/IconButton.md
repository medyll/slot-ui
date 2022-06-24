```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        icon: ElementProps['icon'];
        iconFamily?: string | undefined;
        iconClassName?: string | undefined;
        iconFontSize?: "default" | "medium" | "full" | "tiny" | "small" | "large" | "big" | "auto" | undefined;
        style?: string | undefined;
        showShip?: boolean | undefined;
        usePopperOpt?: UsePopperProps | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```