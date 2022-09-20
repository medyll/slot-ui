```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        compId: number;
        payload: Record<string, any>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DynCompProps = typeof __propDef.props;
export declare type DynCompEvents = typeof __propDef.events;
export declare type DynCompSlots = typeof __propDef.slots;
export default class DynComp extends SvelteComponentTyped<DynCompProps, DynCompEvents, DynCompSlots> {
}
export {};

 ```