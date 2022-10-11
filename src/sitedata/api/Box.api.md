```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        isOpen?: boolean | undefined;
        showCloseControl?: boolean | undefined;
        hasMenu?: boolean | undefined;
        title?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        content?: string | undefined;
        bottomZone?: string | undefined;
        actions?: any;
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
        bottomZone: {};
    };
};
export declare type BoxProps = typeof __propDef.props;
export declare type BoxEvents = typeof __propDef.events;
export declare type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {
    get actions(): any;
}
export {};

 ```