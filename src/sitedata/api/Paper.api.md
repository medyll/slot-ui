```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        density?: "default" | "medium" | "none" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type PaperProps = typeof __propDef.props;
export declare type PaperEvents = typeof __propDef.events;
export declare type PaperSlots = typeof __propDef.slots;
export default class Paper extends SvelteComponentTyped<PaperProps, PaperEvents, PaperSlots> {
}
export {};

 ```