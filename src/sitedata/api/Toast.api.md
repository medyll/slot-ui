```/** @typedef {typeof __propDef.props}  ToastProps */
/** @typedef {typeof __propDef.events}  ToastEvents */
/** @typedef {typeof __propDef.slots}  ToastSlots */
export default class Toast extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

 ```