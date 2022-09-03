```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: any[] | undefined;
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
export declare type VirtualizeProps = typeof __propDef.props;
export declare type VirtualizeEvents = typeof __propDef.events;
export declare type VirtualizeSlots = typeof __propDef.slots;
export default class Virtualize extends SvelteComponentTyped<VirtualizeProps, VirtualizeEvents, VirtualizeSlots> {
}
export {};

 ```