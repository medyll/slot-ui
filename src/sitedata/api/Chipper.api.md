```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        style?: string | undefined;
        position?: "left" | "right" | "top" | "bottom" | undefined;
        /** sho or hide the chip */ showChip?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        chipperSlot: {};
    };
};
export declare type ChipperProps = typeof __propDef.props;
export declare type ChipperEvents = typeof __propDef.events;
export declare type ChipperSlots = typeof __propDef.slots;
export default class Chipper extends SvelteComponentTyped<ChipperProps, ChipperEvents, ChipperSlots> {
}
export {};

 ```