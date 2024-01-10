```import { SvelteComponent } from "svelte";
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
export type ColumnerProps = typeof __propDef.props;
export type ColumnerEvents = typeof __propDef.events;
export type ColumnerSlots = typeof __propDef.slots;
export default class Columner extends SvelteComponent<ColumnerProps, ColumnerEvents, ColumnerSlots> {
}
export {};

 ```