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
export declare type ChromeNavProps = typeof __propDef.props;
export declare type ChromeNavEvents = typeof __propDef.events;
export declare type ChromeNavSlots = typeof __propDef.slots;
export default class ChromeNav extends SvelteComponentTyped<ChromeNavProps, ChromeNavEvents, ChromeNavSlots> {
}
export {};
