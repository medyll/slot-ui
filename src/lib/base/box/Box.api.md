```import { SvelteComponent } from "svelte";
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
        titleBarTitle: {
            slot: string;
        };
        titleBarIcon: {
            slot: string;
        };
        default: {};
        boxBottomZone: {};
    };
};
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponent<BoxProps, BoxEvents, BoxSlots> {
    get actions(): any;
}
export {};

 ```