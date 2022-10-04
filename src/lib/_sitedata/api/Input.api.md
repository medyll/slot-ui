```import { SvelteComponentTyped } from "svelte";
import { type UsePopperProps } from '../../../ui/popper/usePopper';
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
        size?: "small" | "default" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined;
        height?: string | undefined;
        borderless?: boolean | undefined;
        transparent?: boolean | undefined;
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        startInputSlot: {};
        endInputSlot: {};
    };
};
export declare type InputProps = typeof __propDef.props;
export declare type InputEvents = typeof __propDef.events;
export declare type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
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
    get size(): "small" | "default" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined;
    /**accessor*/
    set size(_: "small" | "default" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined);
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