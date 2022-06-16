import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from 'src/types';
export declare type SizeType = keyof typeof sizes;
declare const sizes: Record<ElementProps['sizeType'], number>;
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        fontSize?: "default" | "medium" | "full" | "tiny" | "small" | "large" | "big" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IconProps = typeof __propDef.props;
export declare type IconEvents = typeof __propDef.events;
export declare type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
}
export {};
