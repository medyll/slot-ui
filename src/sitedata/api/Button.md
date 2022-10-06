```ts 
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
        endIcon?: string | undefined;
        endIconColor?: string | undefined;
        endIconSize?: string | undefined;
        bgTheme?: string | undefined;
        usePopper?: UsePopperProps | undefined;
        loading?: boolean | undefined;
        showChip?: boolean | undefined;
        popperOpen?: boolean | undefined;
        contained?: boolean | undefined;
        bordered?: boolean | undefined;
        link?: boolean | undefined;
        naked?: boolean | undefined;
        size?: "small" | "default" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined;
        density?: "default" | "medium" | "none" | "tight" | "kind" | undefined;
        nowrap?: boolean | undefined;
        height?: string | undefined;
        selected?: boolean | undefined;
        focus?: boolean | undefined;
        actionStyle?: string | undefined;
        htmlRootStyle?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
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