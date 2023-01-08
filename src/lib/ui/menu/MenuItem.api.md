```import { SvelteComponentTyped } from "svelte";
import type { IMenuItemProps } from "./types.js";
import type { ElementProps } from "../../types/index.js";
declare const __propDef: {
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
        /** position in the list */ itemIndex: number;
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
    get iconSize(): "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    /**accessor*/
    set iconSize(_: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined);
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
    get itemIndex(): number;
    /**accessor*/
    set itemIndex(_: number);
}
export {};

 ```