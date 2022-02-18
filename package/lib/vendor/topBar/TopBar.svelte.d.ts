import { SvelteComponentTyped } from "svelte";
declare type MenuBarTitleType = string | undefined;
declare const __propDef: {
    props: {
        title: MenuBarTitleType;
        orientation?: "left" | "right" | undefined;
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
