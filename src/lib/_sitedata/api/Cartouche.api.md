```import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        /** @restProps {button | a} */ class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** displayed title of the cartouche */ primary?: string | undefined;
        /** displayed sub title of the cartouche */ secondary?: string | undefined;
        icon?: string | undefined;
        /** can be set as a prop or as a className */ stacked?: boolean | undefined;
        component?: SvelteComponent | undefined;
        componentProps?: Record<string, any> | undefined;
        /** show the title divider line */ showTitleDivider?: boolean | undefined;
        /** show the default border style */ bordered?: boolean | undefined;
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
        primarySlot: {};
        secondarySlot: {};
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

 ```