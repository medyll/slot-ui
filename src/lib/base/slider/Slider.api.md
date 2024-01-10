```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        value: any;
        /** used if props.steps is not used */ range?: number | undefined;
        rangeStep?: any | undefined;
        minimum: any;
        maximum: any;
        /** used over range, using indexOf */ steps?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
export default class Slider extends SvelteComponent<SliderProps, SliderEvents, SliderSlots> {
}
export {};

 ```