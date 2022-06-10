import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        frameId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ChromeFrameProps = typeof __propDef.props;
export declare type ChromeFrameEvents = typeof __propDef.events;
export declare type ChromeFrameSlots = typeof __propDef.slots;
export default class ChromeFrame extends SvelteComponentTyped<ChromeFrameProps, ChromeFrameEvents, ChromeFrameSlots> {
}
export {};
