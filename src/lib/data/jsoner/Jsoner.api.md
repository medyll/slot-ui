```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        mode?: 'array' | 'object' | 'string' | 'number' | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type JsonerProps = typeof __propDef.props;
export type JsonerEvents = typeof __propDef.events;
export type JsonerSlots = typeof __propDef.slots;
export default class Jsoner extends SvelteComponent<JsonerProps, JsonerEvents, JsonerSlots> {
}
export {};

 ```