```ts 
__propDef: {
    props: {
        open: boolean;
        component?: null | undefined;
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