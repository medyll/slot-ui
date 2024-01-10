```import { SvelteComponent } from "svelte";
import { type SvelteComponentDev } from "svelte/internal";
import { type StickToPositionType } from "../../uses/stickTo/stickTo.js";
declare const __propDef: {
    props: {
        /** popper HTMLDivElement */ element?: Element | undefined;
        class?: string | undefined;
        code?: string | undefined;
        parentNode?: HTMLElement | undefined;
        stickToHookWidth?: boolean | undefined;
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
        useStickTo?: ((node: any) => void) | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        popperHolder: {};
        holderSlot: {};
        default: {};
    };
};
export type PopperProps = typeof __propDef.props;
export type PopperEvents = typeof __propDef.events;
export type PopperSlots = typeof __propDef.slots;
export default class Popper extends SvelteComponent<PopperProps, PopperEvents, PopperSlots> {
    get toggle(): () => void;
    get hide(): () => void;
    get show(): () => void;
    get clickedAway(): () => void;
    get useStickTo(): (node: any) => void;
    get element(): Element | undefined;
    /**accessor*/
    set element(_: Element | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get code(): string | undefined;
    /**accessor*/
    set code(_: string | undefined);
    get parentNode(): HTMLElement | undefined;
    /**accessor*/
    set parentNode(_: HTMLElement | undefined);
    get stickToHookWidth(): boolean | undefined;
    /**accessor*/
    set stickToHookWidth(_: boolean | undefined);
    get component(): any;
    /**accessor*/
    set component(_: any);
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