import { SvelteComponentTyped } from "svelte";
import Drawer from '../../base/drawer/Drawer.svelte';
declare const __propDef: {
    props: {
        /** common slotUi exports*/ class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** end slotUi exports*/ elementNav?: HTMLDivElement | null | undefined;
        frameDrawerRef?: Drawer | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        frameHeaderSlot: {};
        navLeftHeaderFrameSlot: {};
        frameDrawerSlot: {};
        contentHeaderFrameSlot: {};
        contentFrameSlot: {};
    };
};
export declare type FrameProps = typeof __propDef.props;
export declare type FrameEvents = typeof __propDef.events;
export declare type FrameSlots = typeof __propDef.slots;
export default class Frame extends SvelteComponentTyped<FrameProps, FrameEvents, FrameSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get elementNav(): HTMLDivElement | null | undefined;
    /**accessor*/
    set elementNav(_: HTMLDivElement | null | undefined);
    get frameDrawerRef(): Drawer | undefined;
    /**accessor*/
    set frameDrawerRef(_: Drawer | undefined);
}
export {};
