import { SvelteComponentTyped } from "svelte";
import type { LisItemProps } from './types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        listItems: LisItemProps[];
        direction?: "vertical" | "horizontal" | undefined;
        height?: string | undefined;
        style?: string | undefined;
        showIcon?: boolean | undefined;
        noVirtualize?: boolean | undefined;
        selectorField: any;
        selectedDataKey: string;
        setSelectedData?: Record<string, any> | undefined;
        setSelectedItem?: Record<string, any> | undefined;
        onItemClick: (args: Record<string, any>) => void;
        /** deprecated , use primary */ title: string;
        /** displayed as H5*/ primary?: string | undefined;
        /** secondary title */ secondary?: string | undefined;
        /** fieldName by wich we will group */ groupBy: string;
        /** List will not be clickable and will gain opacity */ disabled?: boolean | undefined;
        density?: "none" | "tight" | "default" | "medium" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
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
