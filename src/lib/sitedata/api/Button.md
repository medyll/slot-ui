```typescript 
__propDef: {
    props: {
        [x: string]: any;
        presetDefault?: string | undefined;
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
        type?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        iconColor?: string | undefined;
        usePopper?: UsePopperProps | undefined;
        loading?: boolean | undefined;
        showChip?: boolean | undefined;
        contained?: boolean | undefined;
        bordered?: boolean | undefined;
        link?: boolean | undefined;
        naked?: boolean | undefined;
        size?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        nowrap?: boolean | undefined;
        height?: string | undefined;
        selected?: boolean | undefined;
        focus?: boolean | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        action?: string | undefined;
        reverse?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        startButtonSlot: {};
        default: {};
        actionIcon: {};
        loadingIconButtonSlot: {};
        popper: {};
    };
};

 ```