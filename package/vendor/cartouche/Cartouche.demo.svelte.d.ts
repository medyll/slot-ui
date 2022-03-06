/** @typedef {typeof __propDef.props}  CartoucheProps */
/** @typedef {typeof __propDef.events}  CartoucheEvents */
/** @typedef {typeof __propDef.slots}  CartoucheSlots */
export default class Cartouche extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CartoucheProps = typeof __propDef.props;
export type CartoucheEvents = typeof __propDef.events;
export type CartoucheSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
