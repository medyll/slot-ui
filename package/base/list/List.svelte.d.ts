import { SvelteComponentTyped } from "svelte";
import type { LisItemProps } from './types';
import type { Data } from '../../data/grouper/Grouper.svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        /** formated listItems list  */ listItems?: LisItemProps[] | undefined;
        /** provided raw data, used if no listItems list is provided  */ data?: Data[] | undefined;
        /** Row from data for primary, used if props.data is provided  */ dataFieldPrimary?: string | undefined;
        /** Row from data for secondary, used if props.data is provided  */ dataFieldSecondary?: string | undefined;
        height?: string | undefined;
        style?: string | undefined;
        showIcon?: boolean | undefined;
        noVirtualize?: boolean | undefined;
        selectorField: any;
        selectedDataKey?: string | undefined;
        setSelectedData?: Record<string, any> | undefined;
        setSelectedItem?: Record<string, any> | undefined;
        onItemClick?: ((args: Record<string, any>) => void) | undefined;
        /** @deprecated use primary title  */ title?: string | undefined;
        /** displayed as H5*/ primary?: string | undefined;
        /** secondary title */ secondary?: string | undefined;
        /** icon for the  title  zone*/ icon?: string | undefined;
        /** fieldName by wich we will group */ groupBy?: string | undefined;
        /** List will not be clickable and will gain opacity */ disabled?: boolean | undefined;
        density?: "none" | "tight" | "default" | "medium" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        commandBarSlot: {};
        default: {
            listItem: LisItemProps;
        };
    };
};
export declare type ListProps = typeof __propDef.props;
export declare type ListEvents = typeof __propDef.events;
export declare type ListSlots = typeof __propDef.slots;
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
