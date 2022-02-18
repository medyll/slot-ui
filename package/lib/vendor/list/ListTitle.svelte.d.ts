import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon: string;
        primary: string;
        secondary: string;
        action: string;
        density?: "default" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        primary: {};
        secondary: {};
        action: {};
        iloveslots: {};
    };
};
export declare type ListTitleProps = typeof __propDef.props;
export declare type ListTitleEvents = typeof __propDef.events;
export declare type ListTitleSlots = typeof __propDef.slots;
export default class ListTitle extends SvelteComponentTyped<ListTitleProps, ListTitleEvents, ListTitleSlots> {
}
export {};
