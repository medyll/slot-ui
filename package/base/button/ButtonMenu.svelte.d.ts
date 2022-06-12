import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
import type { PopperPositionType } from '../../ui/popper/Popper.svelte';
declare const __propDef: {
    props: {
        icon?: string | undefined;
        menuData?: Record<string, any> | undefined;
        actionComponent?: SvelteComponent | any;
        menuProps?: Record<string, any> | undefined;
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
}
export {};
