```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: any | undefined;
        columns?: number | undefined;
        isExpanded?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: unknown;
        };
        zoomSlot: {};
    };
};
export declare type PanelGridProps = typeof __propDef.props;
export declare type PanelGridEvents = typeof __propDef.events;
export declare type PanelGridSlots = typeof __propDef.slots;
export default class PanelGrid extends SvelteComponentTyped<PanelGridProps, PanelGridEvents, PanelGridSlots> {
}
export {};

 ```