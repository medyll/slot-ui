```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DebugProps = typeof __propDef.props;
export type DebugEvents = typeof __propDef.events;
export type DebugSlots = typeof __propDef.slots;
export default class Debug extends SvelteComponent<DebugProps, DebugEvents, DebugSlots> {
}
export {};

 ```