```ts 
__propDef: {
    props: {
        [x: string]: any;
        frameId?: string | undefined;
        title?: string | undefined;
        secondaryTitle?: string | undefined;
        description?: string | undefined;
        open?: boolean | undefined;
        minimized?: boolean | undefined;
        maximized?: boolean | undefined;
        active?: boolean | undefined;
        component?: any;
        componentProps?: any;
        contentHTML?: any;
        onClose?: (() => void) | undefined;
        onCancel?: (() => void) | undefined;
        onValidate?: (() => void) | undefined;
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