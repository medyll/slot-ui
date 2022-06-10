import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        label: string;
        icon: string;
        /** can be set as a prop or as a className */ stacked?: boolean | undefined;
        component?: SvelteComponent | undefined;
        componentProps?: Record<string, any> | undefined;
        isOpen?: boolean | undefined;
        /** use to control cartouche */ actions?: {
            open: () => void;
            toggle: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cartoucheIconSlot: {};
        cartoucheLabelSlot: {};
        cartoucheActionSlot: {};
        default: {};
    };
};
export declare type CartoucheProps = typeof __propDef.props;
export declare type CartoucheEvents = typeof __propDef.events;
export declare type CartoucheSlots = typeof __propDef.slots;
export default class Cartouche extends SvelteComponentTyped<CartoucheProps, CartoucheEvents, CartoucheSlots> {
    get actions(): {
        open: () => void;
        toggle: () => void;
    };
}
export {};
