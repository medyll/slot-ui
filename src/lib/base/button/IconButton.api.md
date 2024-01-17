```import { SvelteComponent } from "svelte";
import type { ElementProps } from '../../types/index.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        icon: ElementProps['icon'];
        iconFontSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        style?: string | undefined;
        ratio?: string | undefined;
        showShip?: boolean | undefined;
        rotation?: number | undefined;
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
export type IconButtonProps = typeof __propDef.props;
export type IconButtonEvents = typeof __propDef.events;
export type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponent<IconButtonProps, IconButtonEvents, IconButtonSlots> {
}
export {};

 ```