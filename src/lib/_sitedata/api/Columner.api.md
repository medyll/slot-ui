```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ColumnerProps = typeof __propDef.props;
export declare type ColumnerEvents = typeof __propDef.events;
export declare type ColumnerSlots = typeof __propDef.slots;
export default class Columner extends SvelteComponentTyped<ColumnerProps, ColumnerEvents, ColumnerSlots> {
}
export {};

 ```