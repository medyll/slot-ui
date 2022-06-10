import { SvelteComponentTyped } from "svelte";
import type { MenuItemProps } from './types';
declare const __propDef: {
    props: {
        menuList: MenuItemProps[];
        density?: "none" | "tight" | "default" | "kind" | undefined;
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
}
export {};
