import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ChromeContentProps = typeof __propDef.props;
export declare type ChromeContentEvents = typeof __propDef.events;
export declare type ChromeContentSlots = typeof __propDef.slots;
export default class ChromeContent extends SvelteComponentTyped<ChromeContentProps, ChromeContentEvents, ChromeContentSlots> {
}
export {};
