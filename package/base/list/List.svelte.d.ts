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
        setSelectedData: any;
        onItemClick: (args: Record<string, any>) => void;
        title: string;
        groupBy: string;
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
