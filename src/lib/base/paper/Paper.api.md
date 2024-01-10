```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PaperProps = typeof __propDef.props;
export type PaperEvents = typeof __propDef.events;
export type PaperSlots = typeof __propDef.slots;
export default class Paper extends SvelteComponent<PaperProps, PaperEvents, PaperSlots> {
}
export {};

 ```