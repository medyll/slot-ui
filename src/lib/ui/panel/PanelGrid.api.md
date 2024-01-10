```import { SvelteComponent } from "svelte";
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
export type PanelGridProps = typeof __propDef.props;
export type PanelGridEvents = typeof __propDef.events;
export type PanelGridSlots = typeof __propDef.slots;
export default class PanelGrid extends SvelteComponent<PanelGridProps, PanelGridEvents, PanelGridSlots> {
}
export {};

 ```