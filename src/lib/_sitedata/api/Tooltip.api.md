```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | undefined;
        parent?: HTMLElement | undefined;
        component?: any | undefined;
        componentProps?: Record<string, any> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ToolTipProps = typeof __propDef.props;
export declare type ToolTipEvents = typeof __propDef.events;
export declare type ToolTipSlots = typeof __propDef.slots;
export default class ToolTip extends SvelteComponentTyped<ToolTipProps, ToolTipEvents, ToolTipSlots> {
}
export {};

 ```