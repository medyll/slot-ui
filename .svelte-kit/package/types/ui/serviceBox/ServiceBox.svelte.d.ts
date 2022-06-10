import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ServiceBoxProps = typeof __propDef.props;
export declare type ServiceBoxEvents = typeof __propDef.events;
export declare type ServiceBoxSlots = typeof __propDef.slots;
export default class ServiceBox extends SvelteComponentTyped<ServiceBoxProps, ServiceBoxEvents, ServiceBoxSlots> {
}
export {};
