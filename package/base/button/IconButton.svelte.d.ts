import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../../../types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
        icon: ElementProps['icon'];
        style?: string | undefined;
        showShip?: boolean | undefined;
        iconFontSize?: "default" | "tiny" | "small" | "medium" | "large" | "big" | undefined;
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
