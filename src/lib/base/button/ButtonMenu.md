```ts 
__propDef: {
    props: {
        icon?: string | undefined;
        menuData?: IMenuItemProps[] | undefined;
        actionComponent?: SvelteComponent | any;
        menuProps?: IMenuProps | undefined;
        menuPosition?: "TC" | "TL" | "TR" | "BC" | "BL" | "BR" | "T" | "R" | "B" | "L" | "C" | undefined;
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```