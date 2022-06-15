/** @typedef {typeof __propDef.props}  TaskbarProps */
/** @typedef {typeof __propDef.events}  TaskbarEvents */
/** @typedef {typeof __propDef.slots}  TaskbarSlots */
export default class Taskbar extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    taskBarLeft: {};
    default: {};
    taskBarRight: {};
}> {
}
export type TaskbarProps = typeof __propDef.props;
export type TaskbarEvents = typeof __propDef.events;
export type TaskbarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        taskBarLeft: {};
        default: {};
        taskBarRight: {};
    };
};
export {};
