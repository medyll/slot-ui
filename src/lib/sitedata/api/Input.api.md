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
        size?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
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
}
export {};

 ```