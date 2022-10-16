```import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../../types/index.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        icon: ElementProps['icon'];
        iconFontSize?: "default" | "small" | "tiny" | "medium" | "large" | "big" | "full" | "auto" | undefined;
        style?: string | undefined;
        ratio?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IconButtonProps = typeof __propDef.props;
export declare type IconButtonEvents = typeof __propDef.events;
export declare type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponentTyped<IconButtonProps, IconButtonEvents, IconButtonSlots> {
}
export {};

 ```