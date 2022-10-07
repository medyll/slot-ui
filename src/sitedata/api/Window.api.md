```import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from "../../../types/index.js";
declare const __propDef: {
    props: {
        [x: string]: any;
        frameId?: string | undefined;
        title?: string | undefined;
        open?: boolean | undefined;
        minimized?: boolean | undefined;
        maximized?: boolean | undefined;
        active?: boolean | undefined;
        secondaryTitle?: string | undefined;
        description?: string | undefined;
        onClose?: (() => void) | undefined;
        onCancel?: (() => void) | undefined;
        onValidate?: (() => void) | undefined;
        hideAcceptButton?: boolean | undefined;
        hideCloseButton?: boolean | undefined;
        component?: any;
        componentProps?: any;
        contentHTML?: any;
        parentNode?: HTMLElement | undefined;
        icon?: string | undefined;
        flow?: ElementProps["flow"] | undefined;
        defaultPosition?: {
            x: number;
            y: number;
        } | undefined;
        self?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type WindowProps = typeof __propDef.props;
export declare type WindowEvents = typeof __propDef.events;
export declare type WindowSlots = typeof __propDef.slots;
export default class Window extends SvelteComponentTyped<WindowProps, WindowEvents, WindowSlots> {
    get frameId(): string | undefined;
    /**accessor*/
    set frameId(_: string | undefined);
    get title(): string | undefined;
    /**accessor*/
    set title(_: string | undefined);
    get open(): boolean | undefined;
    /**accessor*/
    set open(_: boolean | undefined);
    get minimized(): boolean | undefined;
    /**accessor*/
    set minimized(_: boolean | undefined);
    get maximized(): boolean | undefined;
    /**accessor*/
    set maximized(_: boolean | undefined);
    get active(): boolean | undefined;
    /**accessor*/
    set active(_: boolean | undefined);
    get secondaryTitle(): string | undefined;
    /**accessor*/
    set secondaryTitle(_: string | undefined);
    get description(): string | undefined;
    /**accessor*/
    set description(_: string | undefined);
    get onClose(): (() => void) | undefined;
    /**accessor*/
    set onClose(_: (() => void) | undefined);
    get onCancel(): (() => void) | undefined;
    /**accessor*/
    set onCancel(_: (() => void) | undefined);
    get onValidate(): (() => void) | undefined;
    /**accessor*/
    set onValidate(_: (() => void) | undefined);
    get hideAcceptButton(): boolean | undefined;
    /**accessor*/
    set hideAcceptButton(_: boolean | undefined);
    get hideCloseButton(): boolean | undefined;
    /**accessor*/
    set hideCloseButton(_: boolean | undefined);
    get component(): any;
    /**accessor*/
    set component(_: any);
    get componentProps(): any;
    /**accessor*/
    set componentProps(_: any);
    get contentHTML(): any;
    /**accessor*/
    set contentHTML(_: any);
    get parentNode(): HTMLElement | undefined;
    /**accessor*/
    set parentNode(_: HTMLElement | undefined);
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get flow(): "relative" | "absolute" | "fixed" | undefined;
    /**accessor*/
    set flow(_: "relative" | "absolute" | "fixed" | undefined);
    get defaultPosition(): {
        x: number;
        y: number;
    } | undefined;
    /**accessor*/
    set defaultPosition(_: {
        x: number;
        y: number;
    } | undefined);
    get self(): null | undefined;
    /**accessor*/
    set self(_: null | undefined);
}
export {};

 ```