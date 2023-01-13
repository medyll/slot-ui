```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        style?: string | undefined;
        /** position of the chipper */ position?: "left" | "right" | "top" | "bottom" | undefined;
        bgTheme?: string | undefined;
        /** css color code for the chip */ color?: string | undefined;
        /** text or html is slot is not used */ content?: string | undefined;
        /** show or hide the chip */ showChip?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        chipperChip: {};
    };
};

 ```