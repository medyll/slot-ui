import { SvelteComponentTyped } from "svelte";
import type { LisItemProps } from './types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        listItems: LisItemProps[];
        direction?: "vertical" | "horizontal" | undefined;
        style?: string | undefined;
        selectorField: undefined;
        onItemClick: undefined;
        title: string;
        density?: "default" | "none" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
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
