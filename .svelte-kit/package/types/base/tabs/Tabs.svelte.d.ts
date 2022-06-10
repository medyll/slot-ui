import { SvelteComponentTyped } from "svelte";
import type { SvelteComponent } from 'svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: {
            label: string;
            code: string;
            component: SvelteComponent;
            componentProps: Record<string, any>;
        }[] | undefined;
        activeTabCode?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tabsTitleSlot: {};
        tabsButtonSlot: {};
    };
};
export declare type TabsProps = typeof __propDef.props;
export declare type TabsEvents = typeof __propDef.events;
export declare type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};
