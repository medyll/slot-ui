```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TaskBarContentProps = typeof __propDef.props;
export type TaskBarContentEvents = typeof __propDef.events;
export type TaskBarContentSlots = typeof __propDef.slots;
export default class TaskBarContent extends SvelteComponent<TaskBarContentProps, TaskBarContentEvents, TaskBarContentSlots> {
}
export {};

 ```