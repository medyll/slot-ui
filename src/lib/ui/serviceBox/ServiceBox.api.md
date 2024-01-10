```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ServiceBoxProps = typeof __propDef.props;
export type ServiceBoxEvents = typeof __propDef.events;
export type ServiceBoxSlots = typeof __propDef.slots;
export default class ServiceBox extends SvelteComponent<ServiceBoxProps, ServiceBoxEvents, ServiceBoxSlots> {
}
export {};

 ```