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
export type BootStrAppProps = typeof __propDef.props;
export type BootStrAppEvents = typeof __propDef.events;
export type BootStrAppSlots = typeof __propDef.slots;
export default class BootStrApp extends SvelteComponent<BootStrAppProps, BootStrAppEvents, BootStrAppSlots> {
}
export {};

 ```