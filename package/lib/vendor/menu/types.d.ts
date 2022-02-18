import type { ElementProps } from "src/types";
export declare type MenuProps<T> = {
    density: ElementProps['density'];
    hasIcon?: boolean;
    data?: T;
    action?: () => void;
};
export declare type MenuItemProps = {
    text: string;
    icon: string;
    action?: () => void;
};
