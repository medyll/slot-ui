import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
import type { PopperPositionType } from '../../ui/popper/Popper.svelte';
import type { MenuItemProps } from '../../ui/menu/types';
declare const __propDef: {
    props: {
        icon?: string | undefined;
        menuData?: Record<string, any> | undefined;
        actionComponent?: SvelteComponent | any;
        menuProps?: {
            menuList?: MenuItemProps<any>[] | undefined;
            density?: "none" | "tight" | "default" | "kind" | undefined;
        } | undefined;
        menuPosition?: PopperPositionType | undefined;
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ButtonMenuProps = typeof __propDef.props;
export declare type ButtonMenuEvents = typeof __propDef.events;
export declare type ButtonMenuSlots = typeof __propDef.slots;
export default class ButtonMenu extends SvelteComponentTyped<ButtonMenuProps, ButtonMenuEvents, ButtonMenuSlots> {
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get menuData(): Record<string, any> | undefined;
    /**accessor*/
    set menuData(_: Record<string, any> | undefined);
    get actionComponent(): any;
    /**accessor*/
    set actionComponent(_: any);
    get menuProps(): {
        menuList?: MenuItemProps<any>[] | undefined;
        density?: "none" | "tight" | "default" | "kind" | undefined;
    } | undefined;
    /**accessor*/
    set menuProps(_: {
        menuList?: MenuItemProps<any>[] | undefined;
        density?: "none" | "tight" | "default" | "kind" | undefined;
    } | undefined);
    get menuPosition(): PopperPositionType | undefined;
    /**accessor*/
    set menuPosition(_: PopperPositionType | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLButtonElement | null | undefined;
    /**accessor*/
    set element(_: HTMLButtonElement | null | undefined);
}
export {};
