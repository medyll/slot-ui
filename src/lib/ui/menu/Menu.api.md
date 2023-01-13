```import { SvelteComponentTyped } from "svelte";
import type { IMenuItemProps } from "./types.js";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        /** @deprecated */ menuList?: IMenuItemProps[] | undefined;
        menuItemsList?: IMenuItemProps[] | undefined;
        data?: Record<string, any>[] | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
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
    get menuList(): IMenuItemProps<any>[] | undefined;
    /**accessor*/
    set menuList(_: IMenuItemProps<any>[] | undefined);
    get menuItemsList(): IMenuItemProps<any>[] | undefined;
    /**accessor*/
    set menuItemsList(_: IMenuItemProps<any>[] | undefined);
    get data(): Record<string, any>[] | undefined;
    /**accessor*/
    set data(_: Record<string, any>[] | undefined);
    get density(): "medium" | "default" | "none" | "tight" | "kind" | undefined;
    /**accessor*/
    set density(_: "medium" | "default" | "none" | "tight" | "kind" | undefined);
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