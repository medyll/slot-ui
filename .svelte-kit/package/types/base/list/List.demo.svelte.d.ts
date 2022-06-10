import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ListProps = typeof __propDef.props;
export declare type ListEvents = typeof __propDef.events;
export declare type ListSlots = typeof __propDef.slots;
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
