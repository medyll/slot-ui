import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        icon?: string | undefined;
        parent: HTMLElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ContentSwitcherProps = typeof __propDef.props;
export declare type ContentSwitcherEvents = typeof __propDef.events;
export declare type ContentSwitcherSlots = typeof __propDef.slots;
export default class ContentSwitcher extends SvelteComponentTyped<ContentSwitcherProps, ContentSwitcherEvents, ContentSwitcherSlots> {
}
export {};
