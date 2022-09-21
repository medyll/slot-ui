```import { SvelteComponentTyped } from "svelte";
import { type SvelteComponentDev } from 'svelte/internal';
declare const __propDef: {
    props: {
        /** popper HTMLDivElement */ element: HTMLElement;
        code: string;
        parentNode: HTMLElement;
        component?: SvelteComponentDev | undefined;
        componentProps?: {} | undefined;
        position?: import("../../uses/stickTo/stickTo.js").StickToPositionType | undefined;
        content?: any | undefined;
        style?: string | undefined;
        toggle?: (() => void) | undefined;
        hide?: (() => void) | undefined;
        show?: (() => void) | undefined;
        clickedAway?: (() => void) | undefined;
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
    get clickedAway(): () => void;
    get element(): HTMLElement;
    /**accessor*/
    set element(_: HTMLElement);
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
    get position(): import("../../uses/stickTo/stickTo.js").StickToPositionType | undefined;
    /**accessor*/
    set position(_: import("../../uses/stickTo/stickTo.js").StickToPositionType | undefined);
    get content(): any;
    /**accessor*/
    set content(_: any);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
}
export {};

 ```