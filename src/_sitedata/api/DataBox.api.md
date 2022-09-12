```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        loading?: boolean | undefined;
        error?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DataBoxProps = typeof __propDef.props;
export declare type DataBoxEvents = typeof __propDef.events;
export declare type DataBoxSlots = typeof __propDef.slots;
export default class DataBox extends SvelteComponentTyped<DataBoxProps, DataBoxEvents, DataBoxSlots> {
}
export {};

 ```