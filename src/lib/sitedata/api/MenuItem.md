```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | undefined;
        text: MenuItemProps['text'];
        icon?: MenuItemProps['icon'] | undefined;
        divider?: MenuItemProps['divider'];
        data?: Record<string, any> | undefined;
        onMenuItemClick?: Function | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        menuItemIconSlot: {};
        default: {};
        menuItemTextSlot: {};
    };
};

 ```