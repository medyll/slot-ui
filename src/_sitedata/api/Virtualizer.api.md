```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
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
export declare type VirtualizerProps = typeof __propDef.props;
export declare type VirtualizerEvents = typeof __propDef.events;
export declare type VirtualizerSlots = typeof __propDef.slots;
export default class Virtualizer extends SvelteComponentTyped<VirtualizerProps, VirtualizerEvents, VirtualizerSlots> {
}
export {};

 ```