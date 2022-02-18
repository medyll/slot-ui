/** @typedef {typeof __propDef.props}  DataListCellProps */
/** @typedef {typeof __propDef.events}  DataListCellEvents */
/** @typedef {typeof __propDef.slots}  DataListCellSlots */
export default class DataListCell extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DataListCellProps = typeof __propDef.props;
export type DataListCellEvents = typeof __propDef.events;
export type DataListCellSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
