import { SvelteComponentTyped } from "svelte";
import type { MenuItemProps } from './types';
declare const __propDef: {
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
    get text(): string;
    /**accessor*/
    set text(_: string);
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get divider(): boolean | "full" | "padded" | "centered" | undefined;
    /**accessor*/
    set divider(_: boolean | "full" | "padded" | "centered" | undefined);
    get data(): Record<string, any> | undefined;
    /**accessor*/
    set data(_: Record<string, any> | undefined);
    get onMenuItemClick(): Function | undefined;
    /**accessor*/
    set onMenuItemClick(_: Function | undefined);
}
export {};
