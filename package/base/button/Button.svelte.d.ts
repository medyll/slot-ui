import { SvelteComponentTyped } from "svelte";
import { type UsePopperProps } from '../../ui/popper/usePopper';
declare const __propDef: {
    props: {
        [x: string]: any;
        presetDefault?: string | undefined;
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
        usePopper?: UsePopperProps | undefined;
        loading?: boolean | undefined;
        showChip?: boolean | undefined;
        contained?: boolean | undefined;
        bordered?: boolean | undefined;
        link?: boolean | undefined;
        size?: "default" | "medium" | "full" | "tiny" | "small" | "large" | "big" | undefined;
        density?: "none" | "tight" | "default" | "medium" | "kind" | undefined;
        nowrap?: boolean | undefined;
        height?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        action?: string | undefined;
        reverse?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        startButtonSlot: {};
        default: {};
        actionIcon: {};
        loadingIconButtonSlot: {};
        popper: {};
    };
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
