/** @typedef {typeof __propDef.props}  ButtonActionProps */
/** @typedef {typeof __propDef.events}  ButtonActionEvents */
/** @typedef {typeof __propDef.slots}  ButtonActionSlots */
export default class ButtonAction extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ButtonActionProps = typeof __propDef.props;
export type ButtonActionEvents = typeof __propDef.events;
export type ButtonActionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
