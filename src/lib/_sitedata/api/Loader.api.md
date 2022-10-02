```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        isLoading?: boolean | undefined;
        isError?: boolean | undefined;
        isEmpty?: boolean | undefined;
        /** icon sources */ iconisLoading?: string | undefined;
        iconisError?: string | undefined;
        iconisEmpty?: string | undefined;
        /** message to display */ message?: string | undefined;
        /** used if props.message   is omitted */ messages?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loadingSlot: {};
        errorSlot: {};
        emptySlot: {};
        messageSlot: {};
    };
};
export declare type LoaderProps = typeof __propDef.props;
export declare type LoaderEvents = typeof __propDef.events;
export declare type LoaderSlots = typeof __propDef.slots;
export default class Loader extends SvelteComponentTyped<LoaderProps, LoaderEvents, LoaderSlots> {
}
export {};

 ```