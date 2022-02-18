import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../list/types';
declare const __propDef: {
    props: {
        density: ElementProps['density'];
        direction?: "vertical" | "horizontal" | undefined;
        extension: ElementProps['expansion'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DividerProps = typeof __propDef.props;
export declare type DividerEvents = typeof __propDef.events;
export declare type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponentTyped<DividerProps, DividerEvents, DividerSlots> {
}
export {};
