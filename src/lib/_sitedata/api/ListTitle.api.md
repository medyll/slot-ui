```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string | undefined;
        /** displayed as H5*/ primary?: string | undefined;
        /** secondary title */ secondary?: string | undefined;
        action?: string | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        primary: {};
        secondary: {};
        default: {};
        action: {};
    };
};
export declare type ListTitleProps = typeof __propDef.props;
export declare type ListTitleEvents = typeof __propDef.events;
export declare type ListTitleSlots = typeof __propDef.slots;
export default class ListTitle extends SvelteComponentTyped<ListTitleProps, ListTitleEvents, ListTitleSlots> {
}
export {};

 ```