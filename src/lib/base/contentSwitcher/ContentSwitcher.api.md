```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | null | undefined;
        icon?: string | undefined;
        iconback?: string | undefined;
        parent?: HTMLElement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        contentSwitcherIcon: {};
        switcherSlot: {};
        contentSwitcherReveal: {};
    };
};
export type ContentSwitcherProps = typeof __propDef.props;
export type ContentSwitcherEvents = typeof __propDef.events;
export type ContentSwitcherSlots = typeof __propDef.slots;
export default class ContentSwitcher extends SvelteComponent<ContentSwitcherProps, ContentSwitcherEvents, ContentSwitcherSlots> {
}
export {};

 ```