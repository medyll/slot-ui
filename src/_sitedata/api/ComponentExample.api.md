```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        component?: string | undefined;
        cite?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ComponentExampleProps = typeof __propDef.props;
export declare type ComponentExampleEvents = typeof __propDef.events;
export declare type ComponentExampleSlots = typeof __propDef.slots;
export default class ComponentExample extends SvelteComponentTyped<ComponentExampleProps, ComponentExampleEvents, ComponentExampleSlots> {
}
export {};

 ```