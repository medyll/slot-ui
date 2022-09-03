```import { SvelteComponentTyped } from "svelte";
import type { TabsItemsProps } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        items?: TabsItemsProps | undefined;
        activeTabCode?: string | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tabsFirstTitleSlot: {};
        tabLabelSlot: {
            item: import("./types").Items;
        };
        tabsTitleSlot: {};
        tabsButtonSlot: {};
        commandBarSlot: {};
        default: {
            item: import("./types").Items;
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