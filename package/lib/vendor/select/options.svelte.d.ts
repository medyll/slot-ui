/** @typedef {typeof __propDef.props}  OptionsProps */
/** @typedef {typeof __propDef.events}  OptionsEvents */
/** @typedef {typeof __propDef.slots}  OptionsSlots */
export default class Options extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OptionsProps = typeof __propDef.props;
export type OptionsEvents = typeof __propDef.events;
export type OptionsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
