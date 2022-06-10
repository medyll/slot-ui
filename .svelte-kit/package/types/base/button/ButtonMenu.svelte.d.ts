import { SvelteComponentTyped } from "svelte";
import type { SvelteComponentDev } from 'svelte/internal';
declare const __propDef: {
    props: {
        icon?: string | undefined;
        actionComponent: SvelteComponentDev;
        actionComponentProps: any;
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
