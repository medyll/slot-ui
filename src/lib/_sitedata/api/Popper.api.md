```import { SvelteComponentTyped } from "svelte";
import { type SvelteComponentDev } from 'svelte/internal';
import { type StickToPositionType } from '../../uses/stickTo/stickTo.js';
declare const __propDef: {
    props: {
        /** popper HTMLDivElement */ element?: HTMLElement | undefined;
        class?: string | undefined;
        code?: string | undefined;
        parentNode?: HTMLElement | undefined;
        component?: SvelteComponentDev | undefined;
        componentProps?: {} | undefined;
        position?: StickToPositionType | undefined;
        content?: any | undefined;
        style?: string | undefined;
        /** The popper will be closed on clickAway*/ autoClose?: boolean | undefined;
        /** binding : The popper will be opened or is opened */ isOpen?: boolean | undefined;
        toggle?: (() => void) | undefined;
        hide?: (() => void) | undefined;
        show?: (() => void) | undefined;
        clickedAway?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        holderSlot: {};
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
    get clickedAway(): () => void;
    get element(): HTMLElement | undefined;
    /**accessor*/
    set element(_: HTMLElement | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get code(): string | undefined;
    /**accessor*/
    set code(_: string | undefined);
    get parentNode(): HTMLElement | undefined;
    /**accessor*/
    set parentNode(_: HTMLElement | undefined);
    get component(): SvelteComponentDev | undefined;
    /**accessor*/
    set component(_: SvelteComponentDev | undefined);
    get componentProps(): {} | undefined;
    /**accessor*/
    set componentProps(_: {} | undefined);
    get position(): StickToPositionType | undefined;
    /**accessor*/
    set position(_: StickToPositionType | undefined);
    get content(): any;
    /**accessor*/
    set content(_: any);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get autoClose(): boolean | undefined;
    /**accessor*/
    set autoClose(_: boolean | undefined);
    get isOpen(): boolean | undefined;
    /**accessor*/
    set isOpen(_: boolean | undefined);
}
export {};

 ```