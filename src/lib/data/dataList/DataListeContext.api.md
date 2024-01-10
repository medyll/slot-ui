```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DataListeContextProps = typeof __propDef.props;
export type DataListeContextEvents = typeof __propDef.events;
export type DataListeContextSlots = typeof __propDef.slots;
export default class DataListeContext extends SvelteComponent<DataListeContextProps, DataListeContextEvents, DataListeContextSlots> {
}
export {};

 ```