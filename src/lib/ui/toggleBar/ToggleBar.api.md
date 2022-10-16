```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | null | undefined;
        title: string | undefined;
        icon?: string | undefined;
        orientation?: "left" | "right" | undefined;
        contentSwitcherIcon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        toggleBarIcon: {};
        toggleBarTitle: {};
        toggleBarButtons: {};
        contentSwitcherIcon: {};
        default: {};
    };
};
export declare type ToggleBarProps = typeof __propDef.props;
export declare type ToggleBarEvents = typeof __propDef.events;
export declare type ToggleBarSlots = typeof __propDef.slots;
export default class ToggleBar extends SvelteComponentTyped<ToggleBarProps, ToggleBarEvents, ToggleBarSlots> {
}
export {};

 ```