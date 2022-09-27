```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | undefined;
        text?: string | undefined;
        /** text props, shown on the right side of the menuItem*/ action?: string | undefined;
        icon?: MenuItemProps['icon'] | undefined;
        iconColor?: string | undefined;
        iconSize?: ElementProps['sizeType'] | undefined;
        divider?: MenuItemProps['divider'];
        dividerBefore?: MenuItemProps['divider'];
        data?: Record<string, any> | undefined;
        /** highlight menu item when selected*/ selected?: boolean | undefined;
        onMenuItemClick?: Function | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        divider: {};
        iconSLot: {};
        default: {};
        textSlot: {};
        actionSlot: {};
    };
};

 ```