```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        style?: string | undefined;
        open: boolean;
        component?: null | undefined;
        flow?: ElementProps["flow"] | undefined;
        outer?: boolean | undefined;
        panelSlideId?: string | undefined;
        actions?: {
            open: () => void;
            close: () => void;
            toggle: () => void;
            hasNextPrev: (nextPrev: "next" | "prev") => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            panelSlideId: string;
            data: any;
        };
    };
};

 ```