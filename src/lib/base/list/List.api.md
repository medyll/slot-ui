```import { SvelteComponentTyped } from "svelte";
import type { LisItemProps } from './types.js';
import type { Data } from '../../data/grouper/Grouper.svelte';
import type { SorterFieldType } from '../../data/sorter/types.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        /** formated listItems list  */ listItems?: LisItemProps[] | undefined;
        /** provided raw data, used if no listItems list is provided  */ data?: Data[] | undefined;
        /** Row from data for primary, used if props.data is provided  */ dataFieldPrimary?: string | ((data: Data) => void) | undefined;
        /** Row from data for secondary, used if props.data is provided  */ dataFieldSecondary?: string | ((data: Data) => void) | undefined;
        /** Row from data for secondary, used if props.data is provided  */ dataFieldIcon?: string | ((data: Data) => void) | undefined;
        height?: string | undefined;
        style?: string | undefined;
        showIcon?: boolean | undefined;
        virtualize?: boolean | undefined;
        selectorField: any;
        /** show divider between listItems */ showDivider?: boolean | undefined;
        /** props for Divider, if present*/ dividerProps?: Record<string, any> | undefined;
        /** Sorterer component inclusion. Inferred */ sorterer?: SorterFieldType[] | undefined;
        /** set selected data by dataKey value*/ selectedDataKey?: string | undefined;
        /** set selected data by data object */ setSelectedData?: Record<string, any> | undefined;
        /** set selected data by selectedItem object */ setSelectedItem?: Record<string, any> | undefined;
        onItemClick?: ((args: Record<string, any>) => void) | undefined;
        /** @deprecated use primary title  */ title?: string | undefined;
        /** displayed as H5*/ primary?: string | undefined;
        /** secondary title */ secondary?: string | undefined;
        /** icon for the  title  zone*/ icon?: string | undefined;
        /** fieldName by wich we will group */ groupBy?: string | undefined;
        /** List will not be clickable and will gain opacity */ disabled?: boolean | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        /** binding for selectedData */ activeData?: Record<string, any> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        listTopBar: {};
        title: {};
        default: {};
    };
};
export declare type ListProps = typeof __propDef.props;
export declare type ListEvents = typeof __propDef.events;
export declare type ListSlots = typeof __propDef.slots;
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};

 ```