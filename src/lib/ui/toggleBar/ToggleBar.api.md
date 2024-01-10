```import { SvelteComponent } from "svelte";
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
        contentSwitcherIcon: {
            slot: string;
        };
        contentSwitcherReveal: {
            slot: string;
        };
    };
};
export type ToggleBarProps = typeof __propDef.props;
export type ToggleBarEvents = typeof __propDef.events;
export type ToggleBarSlots = typeof __propDef.slots;
export default class ToggleBar extends SvelteComponent<ToggleBarProps, ToggleBarEvents, ToggleBarSlots> {
}
export {};

 ```