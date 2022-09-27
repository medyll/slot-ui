```import { SvelteComponentTyped } from "svelte";
import type { MenuItemProps } from './types.js';
import type { ElementProps } from '$typings/index.js';
declare const __propDef: {
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
export declare type MenuItemProps = typeof __propDef.props;
export declare type MenuItemEvents = typeof __propDef.events;
export declare type MenuItemSlots = typeof __propDef.slots;
export default class MenuItem extends SvelteComponentTyped<MenuItemProps, MenuItemEvents, MenuItemSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLElement | undefined;
    /**accessor*/
    set element(_: HTMLElement | undefined);
    get text(): string | undefined;
    /**accessor*/
    set text(_: string | undefined);
    get action(): string | undefined;
    /**accessor*/
    set action(_: string | undefined);
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get iconColor(): string | undefined;
    /**accessor*/
    set iconColor(_: string | undefined);
    get iconSize(): "default" | "small" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined;
    /**accessor*/
    set iconSize(_: "default" | "small" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined);
    get divider(): boolean | undefined;
    /**accessor*/
    set divider(_: boolean | undefined);
    get dividerBefore(): boolean | undefined;
    /**accessor*/
    set dividerBefore(_: boolean | undefined);
    get data(): Record<string, any> | undefined;
    /**accessor*/
    set data(_: Record<string, any> | undefined);
    get selected(): boolean | undefined;
    /**accessor*/
    set selected(_: boolean | undefined);
    get onMenuItemClick(): Function | undefined;
    /**accessor*/
    set onMenuItemClick(_: Function | undefined);
}
export {};

 ```