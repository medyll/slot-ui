import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '../../../types';
declare const sizes: Record<ElementProps['sizeType'], number>;
export declare type SizeType = keyof typeof sizes;
declare const __propDef: {
    props: {
        icon?: any;
        fontSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | undefined;
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
