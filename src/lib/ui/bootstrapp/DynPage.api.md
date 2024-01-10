```import { SvelteComponent } from "svelte";
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
export type DynPageProps = typeof __propDef.props;
export type DynPageEvents = typeof __propDef.events;
export type DynPageSlots = typeof __propDef.slots;
export default class DynPage extends SvelteComponent<DynPageProps, DynPageEvents, DynPageSlots> {
}
export {};

 ```