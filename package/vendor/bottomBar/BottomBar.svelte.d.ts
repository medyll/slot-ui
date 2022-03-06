import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        density?: "default" | "none" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BottomBarProps = typeof __propDef.props;
export declare type BottomBarEvents = typeof __propDef.events;
export declare type BottomBarSlots = typeof __propDef.slots;
export default class BottomBar extends SvelteComponentTyped<BottomBarProps, BottomBarEvents, BottomBarSlots> {
}
export {};
