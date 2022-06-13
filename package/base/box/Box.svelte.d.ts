import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        isOpen?: boolean | undefined;
        hasMenu?: boolean | undefined;
        title?: string | undefined;
        icon?: string | undefined;
        content?: string | undefined;
        buttonZone?: string | undefined;
        actions?: any;
        onClose: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        titleSlot: {
            slot: string;
        };
        iconSlot: {
            slot: string;
        };
        contentSlot: {};
        default: {};
        buttonZoneSlot: {};
    };
};
export declare type BoxProps = typeof __propDef.props;
export declare type BoxEvents = typeof __propDef.events;
export declare type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {
    get actions(): any;
}
export {};
