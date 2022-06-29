```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        menuList: MenuItemProps[];
        density?: "none" | "tight" | "default" | "medium" | "kind" | undefined;
        onMenuItemClick?: Function | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```