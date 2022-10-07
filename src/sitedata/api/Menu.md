```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        menuList?: MenuItemProps<any>[] | undefined;
        density?: "default" | "medium" | "none" | "tight" | "kind" | undefined;
        style?: string | undefined;
        /** menu can have no border */ bordered?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```