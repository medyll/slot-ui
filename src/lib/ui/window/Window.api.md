```import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../../types/index.js';
declare const __propDef: {
    props: {
        /** Id of the component's instance */ frameId?: string | undefined;
        /** the title appears on the handle bar */ title?: string | undefined;
        /** boolean to show the window */ open?: boolean | undefined;
        /** state of the window */ minimized?: boolean | undefined;
        maximized?: boolean | undefined;
        /** is on top of others*/ active?: boolean | undefined;
        /** the secondaryTitle appears below the title */ secondaryTitle?: string | undefined;
        /** the description appears somewhere */ description?: string | undefined;
        /** shows or hide the handle, if dismissed, then the whole window is draggable */ showHandle?: boolean | undefined;
        /** actions triggered on click*/ onClose?: ((args?: any) => void) | undefined;
        onCancel?: ((args?: any) => void) | undefined;
        onValidate?: ((args?: any) => void) | undefined;
        /** buttons visible in the bottom bar */ hideAcceptButton?: boolean | undefined;
        hideCloseButton?: boolean | undefined;
        hideCancelButton?: boolean | undefined;
        /** can be opened with a component */ component?: any;
        /** used when props.component is used */ componentProps?: any;
        /** content can be set from a html string */ contentHTML?: any;
        /** parent of the window */ parentNode?: HTMLElement | undefined;
        /** icon used on the left side*/ icon?: string | undefined;
        iconClose?: string | undefined;
        iconValidate?: string | undefined;
        flow?: ElementProps['flow'] | undefined;
        /** close the window on accept */ closeOnValidate?: boolean | undefined;
        /** destroy the component on close */ removeFromDomOnClose?: boolean | undefined;
        /** used to destroy component when opened from function.openWindow */ self: any;
        actions?: {
            close: () => void;
            setActive: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        windowIcon: {};
        default: {};
        windowButtonZone: {};
    };
};
export declare type WindowProps = typeof __propDef.props;
export declare type WindowEvents = typeof __propDef.events;
export declare type WindowSlots = typeof __propDef.slots;
export default class Window extends SvelteComponentTyped<WindowProps, WindowEvents, WindowSlots> {
    get actions(): {
        close: () => void;
        setActive: () => void;
    };
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
    get showHandle(): boolean | undefined;
    /**accessor*/
    set showHandle(_: boolean | undefined);
    get onClose(): ((args?: any) => void) | undefined;
    /**accessor*/
    set onClose(_: ((args?: any) => void) | undefined);
    get onCancel(): ((args?: any) => void) | undefined;
    /**accessor*/
    set onCancel(_: ((args?: any) => void) | undefined);
    get onValidate(): ((args?: any) => void) | undefined;
    /**accessor*/
    set onValidate(_: ((args?: any) => void) | undefined);
    get hideAcceptButton(): boolean | undefined;
    /**accessor*/
    set hideAcceptButton(_: boolean | undefined);
    get hideCloseButton(): boolean | undefined;
    /**accessor*/
    set hideCloseButton(_: boolean | undefined);
    get hideCancelButton(): boolean | undefined;
    /**accessor*/
    set hideCancelButton(_: boolean | undefined);
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
    get iconClose(): string | undefined;
    /**accessor*/
    set iconClose(_: string | undefined);
    get iconValidate(): string | undefined;
    /**accessor*/
    set iconValidate(_: string | undefined);
    get flow(): "relative" | "absolute" | "fixed" | undefined;
    /**accessor*/
    set flow(_: "relative" | "absolute" | "fixed" | undefined);
    get closeOnValidate(): boolean | undefined;
    /**accessor*/
    set closeOnValidate(_: boolean | undefined);
    get removeFromDomOnClose(): boolean | undefined;
    /**accessor*/
    set removeFromDomOnClose(_: boolean | undefined);
    get self(): any;
    /**accessor*/
    set self(_: any);
}
export {};

 ```