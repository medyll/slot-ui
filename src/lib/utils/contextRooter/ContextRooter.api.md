```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        contextKey?: any;
        contextRoot?: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ContextRooterProps = typeof __propDef.props;
export type ContextRooterEvents = typeof __propDef.events;
export type ContextRooterSlots = typeof __propDef.slots;
export default class ContextRooter extends SvelteComponent<ContextRooterProps, ContextRooterEvents, ContextRooterSlots> {
    get contextRoot(): {};
    get contextKey(): any;
    /**accessor*/
    set contextKey(_: any);
}
export {};

 ```