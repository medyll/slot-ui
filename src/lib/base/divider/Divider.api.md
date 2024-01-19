```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**  className off the root component  */ class?: string | undefined;
        /**  css style off the root component  */ style?: string | undefined;
        /** element root HTMLDivElement props  */ element?: HTMLDivElement | null | undefined;
        /** margins applied to divider
             @type {'none' | 'tight' | 'default' | 'medium' | 'kind'}
            */ density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        /** default direction of the divider
            @type {'vertical' | 'horizontal'} */ direction?: "vertical" | "horizontal" | undefined;
        /** expansion of the divider
            @type {'full' | 'padded' | 'centered'}
             */ expansion?: "full" | "padded" | "centered" | undefined;
        /** give shadow to divider */ shadow?: boolean | undefined;
        /** give color to divider */ color?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DividerProps = typeof __propDef.props;
export type DividerEvents = typeof __propDef.events;
export type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponent<DividerProps, DividerEvents, DividerSlots> {
}
export {};

 ```