```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /**    base     */ percentBase?: number | undefined;
        /**   score */ value?: number | undefined;
        /** can be vertical or horizontal */ direction?: "vertical" | "horizontal" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ProgressProps = typeof __propDef.props;
export declare type ProgressEvents = typeof __propDef.events;
export declare type ProgressSlots = typeof __propDef.slots;
export default class Progress extends SvelteComponentTyped<ProgressProps, ProgressEvents, ProgressSlots> {
}
export {};

 ```