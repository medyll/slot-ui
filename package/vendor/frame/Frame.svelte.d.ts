import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        frameHeaderSlot: {};
        navLeftHeaderFrameSlot: {};
        navLeftFrameSlot: {};
        contentHeaderFrameSlot: {};
        contentFrameSlot: {};
    };
};
export declare type FrameProps = typeof __propDef.props;
export declare type FrameEvents = typeof __propDef.events;
export declare type FrameSlots = typeof __propDef.slots;
export default class Frame extends SvelteComponentTyped<FrameProps, FrameEvents, FrameSlots> {
}
export {};
