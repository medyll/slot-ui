```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | undefined;
        text?: string | undefined;
        /** text props, shown on the right side of the menuItem*/ action?: string | undefined;
        icon?: IMenuItemProps["icon"] | undefined;
        iconColor?: string | undefined;
        iconSize?: ElementProps["sizeType"] | undefined;
        divider?: IMenuItemProps["divider"];
        dividerBefore?: IMenuItemProps["divider"];
        data?: Record<string, any> | undefined;
        /** highlight menu item when selected*/ selected?: boolean | undefined;
        onMenuItemClick?: Function | undefined;
        /** position in the list */ itemIndex?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        divider: {};
        menuItemStart: {};
        iconSlot: {};
        default: {};
        menuItemText: {};
        menuItemEnd: {};
        actionSlot: {};
        menuItemDivider: {};
    };
};

 ```