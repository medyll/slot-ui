```import { SvelteComponent } from "svelte";
import type { SorterFieldType } from './types.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** array of Sorter.props */ fields?: SorterFieldType[] | undefined;
        /** data to sort */ data: Record<string, any>[];
        /** binding : final sorted data as raw object  */ sortedData?: any[] | undefined;
        /** binding, used when multiple buttons*/ activeCommonSortField?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SortererProps = typeof __propDef.props;
export type SortererEvents = typeof __propDef.events;
export type SortererSlots = typeof __propDef.slots;
export default class Sorterer extends SvelteComponent<SortererProps, SortererEvents, SortererSlots> {
}
export {};

 ```