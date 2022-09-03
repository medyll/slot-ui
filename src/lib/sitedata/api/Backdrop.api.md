```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        loading?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loadingSlot: {};
        default: {};
    };
};
export declare type BackdropProps = typeof __propDef.props;
export declare type BackdropEvents = typeof __propDef.events;
export declare type BackdropSlots = typeof __propDef.slots;
export default class Backdrop extends SvelteComponentTyped<BackdropProps, BackdropEvents, BackdropSlots> {
}
export {};

 ```