```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DebugProps = typeof __propDef.props;
export declare type DebugEvents = typeof __propDef.events;
export declare type DebugSlots = typeof __propDef.slots;
export default class Debug extends SvelteComponentTyped<DebugProps, DebugEvents, DebugSlots> {
}
export {};

 ```