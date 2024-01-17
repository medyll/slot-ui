```import { SvelteComponent } from "svelte";
import type { IMenuItemProps, IMenuProps } from '../../ui/menu/types';
declare const __propDef: {
    props: {
        icon?: string | undefined;
        menuData?: IMenuItemProps[] | undefined;
        actionComponent?: SvelteComponent | any;
        menuProps?: IMenuProps | undefined;
        menuPosition?: "TC" | "TL" | "TR" | "BC" | "BL" | "BR" | "T" | "R" | "B" | "L" | "C" | undefined;
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
export type ButtonMenuProps = typeof __propDef.props;
export type ButtonMenuEvents = typeof __propDef.events;
export type ButtonMenuSlots = typeof __propDef.slots;
export default class ButtonMenu extends SvelteComponent<ButtonMenuProps, ButtonMenuEvents, ButtonMenuSlots> {
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get menuData(): IMenuItemProps[] | undefined;
    /**accessor*/
    set menuData(_: IMenuItemProps[] | undefined);
    get actionComponent(): any;
    /**accessor*/
    set actionComponent(_: any);
    get menuProps(): IMenuProps | undefined;
    /**accessor*/
    set menuProps(_: IMenuProps | undefined);
    get menuPosition(): "TC" | "TL" | "TR" | "BC" | "BL" | "BR" | "T" | "R" | "B" | "L" | "C" | undefined;
    /**accessor*/
    set menuPosition(_: "TC" | "TL" | "TR" | "BC" | "BL" | "BR" | "T" | "R" | "B" | "L" | "C" | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLElement | null | undefined;
    /**accessor*/
    set element(_: HTMLElement | null | undefined);
}
export {};

 ```