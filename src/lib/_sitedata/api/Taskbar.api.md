```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        taskBarLeft: {};
        default: {};
        taskBarRight: {};
    };
};
export declare type TaskbarProps = typeof __propDef.props;
export declare type TaskbarEvents = typeof __propDef.events;
export declare type TaskbarSlots = typeof __propDef.slots;
export default class Taskbar extends SvelteComponentTyped<TaskbarProps, TaskbarEvents, TaskbarSlots> {
}
export {};

 ```