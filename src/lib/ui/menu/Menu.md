```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        /** @deprecated */ menuList?: IMenuItemProps[] | undefined;
        menuItemsList?: IMenuItemProps[] | undefined;
        data?: Record<string, any>[] | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        style?: string | undefined;
        /** menu can have no border */ bordered?: boolean | undefined;
        selectedIndex?: number | undefined;
        actions?: {
            navigate: (idx: number) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```