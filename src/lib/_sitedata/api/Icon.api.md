```import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '$typings/index.js';
export declare type SizeType = keyof typeof sizes;
declare const sizes: Partial<Record<ElementProps['sizeType'], any>>;
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        fontSize?: "small" | "tiny" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    };
    events: {
        click: any;
    } & {
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

 ```