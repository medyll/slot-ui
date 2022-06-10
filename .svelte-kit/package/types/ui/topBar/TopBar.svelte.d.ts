import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** common slotUi exports*/ class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** end slotUi exports*/ title: string | undefined;
        orientation?: "left" | "right" | undefined;
        contentSwitcherIcon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        menuBarTitle: {};
        menuBarButtons: {};
        menuBarSwitcher: {};
    };
};
export declare type TopBarProps = typeof __propDef.props;
export declare type TopBarEvents = typeof __propDef.events;
export declare type TopBarSlots = typeof __propDef.slots;
export default class TopBar extends SvelteComponentTyped<TopBarProps, TopBarEvents, TopBarSlots> {
}
export {};
