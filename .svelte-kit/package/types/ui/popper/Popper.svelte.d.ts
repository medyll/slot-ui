import { SvelteComponentTyped } from "svelte";
export declare type PopperPositionType = 'TL' | 'TR' | 'BR' | 'B' | 'BL';
import type { SvelteComponentDev } from 'svelte/internal';
declare const __propDef: {
    props: {
        code: string;
        component: SvelteComponentDev;
        componentProps: {};
        position: PopperPositionType;
        parentNode: HTMLElement;
        toggle?: (() => void) | undefined;
        hide?: (() => void) | undefined;
        show?: (() => void) | undefined;
        destroy?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type PopperProps = typeof __propDef.props;
export declare type PopperEvents = typeof __propDef.events;
export declare type PopperSlots = typeof __propDef.slots;
export default class Popper extends SvelteComponentTyped<PopperProps, PopperEvents, PopperSlots> {
    get toggle(): () => void;
    get hide(): () => void;
    get show(): () => void;
    get destroy(): () => void;
    get code(): string;
    /**accessor*/
    set code(_: string);
    get component(): SvelteComponentDev;
    /**accessor*/
    set component(_: SvelteComponentDev);
    get componentProps(): {};
    /**accessor*/
    set componentProps(_: {});
    get position(): PopperPositionType;
    /**accessor*/
    set position(_: PopperPositionType);
    get parentNode(): HTMLElement;
    /**accessor*/
    set parentNode(_: HTMLElement);
}
export {};
