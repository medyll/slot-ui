import { SvelteComponentTyped } from "svelte";
import type { menuListItemType } from './types';
declare const __propDef: {
    props: {
        text: menuListItemType;
        icon: menuListItemType['icon'] | undefined;
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
}
export {};
