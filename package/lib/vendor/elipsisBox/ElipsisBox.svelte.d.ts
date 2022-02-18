import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ElipsisBoxProps = typeof __propDef.props;
export declare type ElipsisBoxEvents = typeof __propDef.events;
export declare type ElipsisBoxSlots = typeof __propDef.slots;
export default class ElipsisBox extends SvelteComponentTyped<ElipsisBoxProps, ElipsisBoxEvents, ElipsisBoxSlots> {
}
export {};
