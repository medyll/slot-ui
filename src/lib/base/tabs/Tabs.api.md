```import { SvelteComponentTyped } from "svelte";
import type { Items, TabsItemsProps } from './types.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: TabsItemsProps | undefined;
        activeTabCode?: string | undefined;
        /** orientation */ orientation?: "vertical" | "horizontal" | undefined;
        onTabClick?: ((item: Items) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tabsTitleMain: {};
        tabLabelSlot: {
            item: Items;
        };
        tabsTitle: {};
        tabsButtons: {};
        default: {
            item: Items;
            activeTabCode: string;
        };
        tabsInner: {
            item: Items;
            activeTabCode: string;
        };
    };
};
export declare type TabsProps = typeof __propDef.props;
export declare type TabsEvents = typeof __propDef.events;
export declare type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
export {};

 ```