```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**  className off the root component  */ class?: string | undefined;
        /**  css style off the root component  */ style?: string | undefined;
        /** element root HTMLDivElement props  */ element?: HTMLDivElement | null | undefined;
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
export type ElementorProps = typeof __propDef.props;
export type ElementorEvents = typeof __propDef.events;
export type ElementorSlots = typeof __propDef.slots;
export default class Elementor extends SvelteComponent<ElementorProps, ElementorEvents, ElementorSlots> {
}
export {};

 ```