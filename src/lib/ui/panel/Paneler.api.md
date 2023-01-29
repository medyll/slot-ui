```import { SvelteComponentTyped } from "svelte";
import type { PanelContextType } from "./types.js";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        style?: string | undefined;
        dd?: string | undefined;
        panelerStore?: PanelContextType | undefined;
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
    get panelerStore(): PanelContextType;
}
export {};

 ```