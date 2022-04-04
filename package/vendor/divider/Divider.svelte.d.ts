import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        density?: "default" | "none" | "tight" | "kind" | undefined;
        direction?: "vertical" | "horizontal" | undefined;
        extension?: "full" | "padded" | "centered" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DividerProps = typeof __propDef.props;
export declare type DividerEvents = typeof __propDef.events;
export declare type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponentTyped<DividerProps, DividerEvents, DividerSlots> {
}
export {};