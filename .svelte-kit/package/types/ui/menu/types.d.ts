import type { ElementProps } from "src/types";
export declare type MenuProps<T = any> = {
    menuList: MenuItemProps[];
    density?: ElementProps['density'];
    hasIcon?: boolean;
    data?: T;
    onMenuItemClick?: Function;
    action?: () => void; /** @deprecated */
};
export declare type MenuItemProps<T = any> = {
    text: string;
    icon?: string;
    data?: T;
    action?: () => void;
    divider?: boolean | ElementProps['expansion'];
};
