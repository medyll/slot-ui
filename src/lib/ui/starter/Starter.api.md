```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StarterProps = typeof __propDef.props;
export type StarterEvents = typeof __propDef.events;
export type StarterSlots = typeof __propDef.slots;
export default class Starter extends SvelteComponent<StarterProps, StarterEvents, StarterSlots> {
}
export {};

 ```