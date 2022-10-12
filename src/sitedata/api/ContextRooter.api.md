```import { SvelteComponentTyped } from "svelte";
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
export declare type ContextRooterProps = typeof __propDef.props;
export declare type ContextRooterEvents = typeof __propDef.events;
export declare type ContextRooterSlots = typeof __propDef.slots;
export default class ContextRooter extends SvelteComponentTyped<ContextRooterProps, ContextRooterEvents, ContextRooterSlots> {
    get contextRoot(): unknown;
    get contextKey(): any;
    /**accessor*/
    set contextKey(_: any);
}
export {};

 ```