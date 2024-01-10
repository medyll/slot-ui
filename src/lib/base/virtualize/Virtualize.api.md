```import { SvelteComponent } from "svelte";
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
        default: {
            item: any;
        };
    };
};
export type VirtualizeProps = typeof __propDef.props;
export type VirtualizeEvents = typeof __propDef.events;
export type VirtualizeSlots = typeof __propDef.slots;
export default class Virtualize extends SvelteComponent<VirtualizeProps, VirtualizeEvents, VirtualizeSlots> {
}
export {};

 ```