import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../../../types';
import { type UsePopperProps } from '$lib/ui/popper/usePopper';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        icon: ElementProps['icon'];
        iconFamily?: string | undefined;
        iconClassName?: string | undefined;
        iconFontSize?: "default" | "medium" | "full" | "tiny" | "small" | "large" | "big" | "auto" | undefined;
        style?: string | undefined;
        showShip?: boolean | undefined;
        usePopperOpt?: UsePopperProps | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type IconButtonProps = typeof __propDef.props;
export declare type IconButtonEvents = typeof __propDef.events;
export declare type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponentTyped<IconButtonProps, IconButtonEvents, IconButtonSlots> {
}
export {};
