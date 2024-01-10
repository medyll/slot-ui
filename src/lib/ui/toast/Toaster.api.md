```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        toasterId?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToasterProps = typeof __propDef.props;
export type ToasterEvents = typeof __propDef.events;
export type ToasterSlots = typeof __propDef.slots;
export default class Toaster extends SvelteComponent<ToasterProps, ToasterEvents, ToasterSlots> {
}
export {};

 ```