```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** margins applied to divider */ density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        /** default direction of the divider */ direction?: "vertical" | "horizontal" | undefined;
        /** expansion of the divider */ expansion?: "full" | "padded" | "centered" | undefined;
        /** give shadow to divider */ shadow?: boolean | undefined;
        /** give color to divider */ color?: string | undefined;
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