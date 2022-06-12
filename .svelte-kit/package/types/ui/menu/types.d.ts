import type { ElementProps } from "src/types";
export declare type MenuProps<T = any> = {
    density: ElementProps['density'];
    hasIcon?: boolean;
    data?: T;
    action?: () => void;
};
export declare type MenuItemProps<T = any> = {
    text: string;
    icon: string;
    data?: T;
    action?: () => void;
    divider: boolean | ElementProps['expansion'];
};
