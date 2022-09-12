```import { SvelteComponentTyped } from "svelte";
import { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        parentElement?: HTMLDivElement | null | undefined;
        component: SvelteComponent;
        componentProps: Record<string, any>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        description: {};
    };
};
export declare type TooltipProps = typeof __propDef.props;
export declare type TooltipEvents = typeof __propDef.events;
export declare type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponentTyped<TooltipProps, TooltipEvents, TooltipSlots> {
}
export {};

 ```