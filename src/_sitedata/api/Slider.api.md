```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SliderProps = typeof __propDef.props;
export declare type SliderEvents = typeof __propDef.events;
export declare type SliderSlots = typeof __propDef.slots;
export default class Slider extends SvelteComponentTyped<SliderProps, SliderEvents, SliderSlots> {
}
export {};

 ```