```import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
import type { MenuItemProps, MenuProps } from '../../ui/menu/types';
declare const __propDef: {
    props: {
        icon?: string | undefined;
        menuData?: MenuItemProps<any>[] | undefined;
        actionComponent?: SvelteComponent | any;
        menuProps?: MenuProps<any> | undefined;
        menuPosition?: import("../../uses/stickTo/stickTo").StickToPositionType | undefined;
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
export declare type ButtonMenuProps = typeof __propDef.props;
export declare type ButtonMenuEvents = typeof __propDef.events;
export declare type ButtonMenuSlots = typeof __propDef.slots;
export default class ButtonMenu extends SvelteComponentTyped<ButtonMenuProps, ButtonMenuEvents, ButtonMenuSlots> {
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get menuData(): MenuItemProps<any>[] | undefined;
    /**accessor*/
    set menuData(_: MenuItemProps<any>[] | undefined);
    get actionComponent(): any;
    /**accessor*/
    set actionComponent(_: any);
    get menuProps(): MenuProps<any> | undefined;
    /**accessor*/
    set menuProps(_: MenuProps<any> | undefined);
    get menuPosition(): import("../../uses/stickTo/stickTo").StickToPositionType | undefined;
    /**accessor*/
    set menuPosition(_: import("../../uses/stickTo/stickTo").StickToPositionType | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLElement | null | undefined;
    /**accessor*/
    set element(_: HTMLElement | null | undefined);
}
export {};

 ```