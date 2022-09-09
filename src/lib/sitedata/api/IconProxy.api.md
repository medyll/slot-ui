```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        icon?: any;
        iconFamily?: string | undefined;
        fontSize?: "small" | "tiny" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IconProxyProps = typeof __propDef.props;
export declare type IconProxyEvents = typeof __propDef.events;
export declare type IconProxySlots = typeof __propDef.slots;
export default class IconProxy extends SvelteComponentTyped<IconProxyProps, IconProxyEvents, IconProxySlots> {
}
export {};

 ```