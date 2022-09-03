```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        opt?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ChromeProps = typeof __propDef.props;
export declare type ChromeEvents = typeof __propDef.events;
export declare type ChromeSlots = typeof __propDef.slots;
export default class Chrome extends SvelteComponentTyped<ChromeProps, ChromeEvents, ChromeSlots> {
    get opt(): any;
}
export {};

 ```