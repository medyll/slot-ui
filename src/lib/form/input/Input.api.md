```import { SvelteComponent } from "svelte";
import { type UsePopperProps } from '../../ui/popper/usePopper.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        type?: string | undefined;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        iconColor?: string | undefined;
        endIcon?: string | undefined;
        endIconColor?: string | undefined;
        usePopper?: UsePopperProps | undefined;
        size?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        height?: string | undefined;
        borderless?: boolean | undefined;
        transparent?: boolean | undefined;
        value?: any | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        inputStart: {};
        inputEnd: {};
    };
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {
    get type(): string | undefined;
    /**accessor*/
    set type(_: string | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get iconColor(): string | undefined;
    /**accessor*/
    set iconColor(_: string | undefined);
    get endIcon(): string | undefined;
    /**accessor*/
    set endIcon(_: string | undefined);
    get endIconColor(): string | undefined;
    /**accessor*/
    set endIconColor(_: string | undefined);
    get usePopper(): UsePopperProps | undefined;
    /**accessor*/
    set usePopper(_: UsePopperProps | undefined);
    get size(): "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    /**accessor*/
    set size(_: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined);
    get height(): string | undefined;
    /**accessor*/
    set height(_: string | undefined);
    get borderless(): boolean | undefined;
    /**accessor*/
    set borderless(_: boolean | undefined);
    get transparent(): boolean | undefined;
    /**accessor*/
    set transparent(_: boolean | undefined);
    get value(): any;
    /**accessor*/
    set value(_: any);
}
export {};

 ```