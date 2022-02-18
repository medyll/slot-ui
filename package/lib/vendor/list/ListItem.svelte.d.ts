import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon: string;
        primary: string;
        secondary: string;
        action: string;
        data?: Record<string, any> | undefined;
        density?: "default" | "tight" | "find" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        primary: {};
        secondary: {};
        action: {};
    };
};
export declare type ListItemProps = typeof __propDef.props;
export declare type ListItemEvents = typeof __propDef.events;
export declare type ListItemSlots = typeof __propDef.slots;
export default class ListItem extends SvelteComponentTyped<ListItemProps, ListItemEvents, ListItemSlots> {
}
export {};
