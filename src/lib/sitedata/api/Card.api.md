```import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../../../types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** vertical alignments of content */ alignment?: "center" | "left" | "right" | undefined;
        /** carried data */ data?: ElementProps['data'] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        cardHeroSlot: {};
        title: {};
        cardContentSlot: {};
        default: {};
        footer: {};
    };
};
export declare type CardProps = typeof __propDef.props;
export declare type CardEvents = typeof __propDef.events;
export declare type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {
}
export {};

 ```