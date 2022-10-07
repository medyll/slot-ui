```ts 
__propDef: {
    props: {
        [x: string]: any;
        frameId?: string | undefined;
        title?: string | undefined;
        open?: boolean | undefined;
        minimized?: boolean | undefined;
        maximized?: boolean | undefined;
        active?: boolean | undefined;
        secondaryTitle?: string | undefined;
        description?: string | undefined;
        onClose?: (() => void) | undefined;
        onCancel?: (() => void) | undefined;
        onValidate?: (() => void) | undefined;
        hideAcceptButton?: boolean | undefined;
        hideCloseButton?: boolean | undefined;
        component?: any;
        componentProps?: any;
        contentHTML?: any;
        parentNode?: HTMLElement | undefined;
        icon?: string | undefined;
        flow?: ElementProps["flow"] | undefined;
        defaultPosition?: {
            x: number;
            y: number;
        } | undefined;
        self?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```