import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        icon: string;
        actions?: {
            open: () => void;
            toggle: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
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
