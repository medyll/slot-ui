```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        test?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ComponentProps = typeof __propDef.props;
export declare type ComponentEvents = typeof __propDef.events;
export declare type ComponentSlots = typeof __propDef.slots;
export default class Component extends SvelteComponentTyped<ComponentProps, ComponentEvents, ComponentSlots> {
}
export {};

 ```