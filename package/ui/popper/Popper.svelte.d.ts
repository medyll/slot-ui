import { SvelteComponentTyped } from "svelte";
import type { SvelteComponentDev } from 'svelte/internal';
import type { PopperPositionType } from './types';
declare const __propDef: {
    props: {
        code: string;
        parentNode: HTMLElement;
        component?: SvelteComponentDev | undefined;
        componentProps?: {} | undefined;
        position?: PopperPositionType | undefined;
        content?: any | undefined;
        toggle?: (() => void) | undefined;
        hide?: (() => void) | undefined;
        show?: (() => void) | undefined;
        /** @deprecated */ destroy?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        button: {};
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
    get parentNode(): HTMLElement;
    /**accessor*/
    set parentNode(_: HTMLElement);
    get component(): SvelteComponentDev | undefined;
    /**accessor*/
    set component(_: SvelteComponentDev | undefined);
    get componentProps(): {} | undefined;
    /**accessor*/
    set componentProps(_: {} | undefined);
    get position(): PopperPositionType | undefined;
    /**accessor*/
    set position(_: PopperPositionType | undefined);
    get content(): any;
    /**accessor*/
    set content(_: any);
}
export {};
