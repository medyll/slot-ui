```import { SvelteComponent } from "svelte";
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
export type PanelerProps = typeof __propDef.props;
export type PanelerEvents = typeof __propDef.events;
export type PanelerSlots = typeof __propDef.slots;
export default class Paneler extends SvelteComponent<PanelerProps, PanelerEvents, PanelerSlots> {
    get panelerStore(): PanelContextType;
}
export {};

 ```