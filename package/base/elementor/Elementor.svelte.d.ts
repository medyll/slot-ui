import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        item?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            itemObject: {
                key: string;
                value: any;
            };
        };
    };
};
export declare type ElementorProps = typeof __propDef.props;
export declare type ElementorEvents = typeof __propDef.events;
export declare type ElementorSlots = typeof __propDef.slots;
export default class Elementor extends SvelteComponentTyped<ElementorProps, ElementorEvents, ElementorSlots> {
}
export {};
