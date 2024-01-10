```import { SvelteComponent } from "svelte";
import "iconify-icon";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        style?: string | undefined;
        icon?: string | undefined;
        iconFamily?: string | undefined;
        fontSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        rotate?: boolean | undefined;
        color?: string | undefined;
        rotation?: number | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {
}
export {};

 ```