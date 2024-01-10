```import { SvelteComponent } from "svelte";
import { type UsePopperProps } from '../../../../../../../src/lib/ui/popper/usePopper.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        presetDefault?: string | undefined;
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
        type?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        iconColor?: string | undefined;
        endIcon?: string | undefined;
        endIconColor?: string | undefined;
        endIconSize?: string | undefined;
        bgTheme?: string | undefined;
        usePopper?: UsePopperProps | undefined;
        loading?: boolean | undefined;
        showChip?: boolean | undefined;
        popperOpen?: boolean | undefined;
        contained?: boolean | undefined;
        bordered?: boolean | undefined;
        link?: boolean | undefined;
        naked?: boolean | undefined;
        size?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
        nowrap?: boolean | undefined;
        height?: string | undefined;
        selected?: boolean | undefined;
        focus?: boolean | undefined;
        actionStyle?: string | undefined;
        htmlRootStyle?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        reverse?: boolean | undefined;
        ratio?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        buttonStart: {};
        default: {};
        buttonEnd: {};
        buttonLoadingIcon: {};
        buttonPopper: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};

 ```