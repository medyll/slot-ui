import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        icon?: string | undefined;
        iconback?: string | undefined;
        parent?: HTMLElement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        switcherSlot: {};
        default: {};
    };
};
export declare type ContentSwitcherProps = typeof __propDef.props;
export declare type ContentSwitcherEvents = typeof __propDef.events;
export declare type ContentSwitcherSlots = typeof __propDef.slots;
export default class ContentSwitcher extends SvelteComponentTyped<ContentSwitcherProps, ContentSwitcherEvents, ContentSwitcherSlots> {
}
export {};
