```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        data?: any[] | undefined;
        height?: string | undefined;
        itemHeight?: number | undefined;
        start?: number | undefined;
        end?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        virtualizeHeaderSlot: {};
        default: {
            item: any;
        };
    };
};
export type VirtualizerProps = typeof __propDef.props;
export type VirtualizerEvents = typeof __propDef.events;
export type VirtualizerSlots = typeof __propDef.slots;
export default class Virtualizer extends SvelteComponent<VirtualizerProps, VirtualizerEvents, VirtualizerSlots> {
}
export {};

 ```