```import { SvelteComponent } from "svelte";
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
export type TaskbarProps = typeof __propDef.props;
export type TaskbarEvents = typeof __propDef.events;
export type TaskbarSlots = typeof __propDef.slots;
export default class Taskbar extends SvelteComponent<TaskbarProps, TaskbarEvents, TaskbarSlots> {
}
export {};

 ```