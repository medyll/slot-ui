```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        params?: {
            page: string;
            subpage: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DynPageProps = typeof __propDef.props;
export declare type DynPageEvents = typeof __propDef.events;
export declare type DynPageSlots = typeof __propDef.slots;
export default class DynPage extends SvelteComponentTyped<DynPageProps, DynPageEvents, DynPageSlots> {
}
export {};

 ```