import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TaskBarContentProps = typeof __propDef.props;
export declare type TaskBarContentEvents = typeof __propDef.events;
export declare type TaskBarContentSlots = typeof __propDef.slots;
export default class TaskBarContent extends SvelteComponentTyped<TaskBarContentProps, TaskBarContentEvents, TaskBarContentSlots> {
}
export {};
