```import { SvelteComponentTyped } from "svelte";
import type { MenuItemProps, MenuProps } from "./types.js";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        /** @deprecated */ menuList?: MenuItemProps[] | undefined;
        menuItemsList?: MenuItemProps[] | undefined;
        data?: Record<string, any>[] | undefined;
        density?: "default" | "medium" | "none" | "tight" | "kind" | undefined;
        style?: string | undefined;
        /** menu can have no border */ bordered?: boolean | undefined;
        selectedIndex?: number | undefined;
        actions?: {
            navigate: (idx: number) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type MenuProps = typeof __propDef.props;
export declare type MenuEvents = typeof __propDef.events;
export declare type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponentTyped<MenuProps, MenuEvents, MenuSlots> {
    get actions(): {
        navigate: (idx: number) => void;
    };
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLElement | null | undefined;
    /**accessor*/
    set element(_: HTMLElement | null | undefined);
    get menuList(): MenuItemProps<any>[] | undefined;
    /**accessor*/
    set menuList(_: MenuItemProps<any>[] | undefined);
    get menuItemsList(): MenuItemProps<any>[] | undefined;
    /**accessor*/
    set menuItemsList(_: MenuItemProps<any>[] | undefined);
    get data(): Record<string, any>[] | undefined;
    /**accessor*/
    set data(_: Record<string, any>[] | undefined);
    get density(): "default" | "medium" | "none" | "tight" | "kind" | undefined;
    /**accessor*/
    set density(_: "default" | "medium" | "none" | "tight" | "kind" | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get bordered(): boolean | undefined;
    /**accessor*/
    set bordered(_: boolean | undefined);
    get selectedIndex(): number | undefined;
    /**accessor*/
    set selectedIndex(_: number | undefined);
}
export {};

 ```