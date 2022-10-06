```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type PanelerProps = typeof __propDef.props;
export declare type PanelerEvents = typeof __propDef.events;
export declare type PanelerSlots = typeof __propDef.slots;
export default class Paneler extends SvelteComponentTyped<PanelerProps, PanelerEvents, PanelerSlots> {
}
export {};

 ```