```import { SvelteComponentTyped } from "svelte";
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
export declare type JsonerProps = typeof __propDef.props;
export declare type JsonerEvents = typeof __propDef.events;
export declare type JsonerSlots = typeof __propDef.slots;
export default class Jsoner extends SvelteComponentTyped<JsonerProps, JsonerEvents, JsonerSlots> {
}
export {};

 ```