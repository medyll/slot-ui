```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** margins applied to divider */ density?: "none" | "tight" | "default" | "medium" | "kind" | undefined;
        /** default direction of the divider */ direction?: "vertical" | "horizontal" | undefined;
        /** expansion of the divider */ expansion?: "full" | "padded" | "centered" | undefined;
        /** give shadow to divider */ shadow?: boolean | undefined;
        /** give color to divider */ color?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```