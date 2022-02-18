import { SvelteComponentTyped } from "svelte";
export declare let red: string;
declare const __propDef: {
    props: {
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
