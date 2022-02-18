import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        taskBarLeft: {};
        taskBarRIght: {};
    };
};
export declare type TaskbarProps = typeof __propDef.props;
export declare type TaskbarEvents = typeof __propDef.events;
export declare type TaskbarSlots = typeof __propDef.slots;
export default class Taskbar extends SvelteComponentTyped<TaskbarProps, TaskbarEvents, TaskbarSlots> {
}
export {};
