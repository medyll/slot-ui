```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        icon?: string | undefined;
        size?: "small" | "tiny" | "medium" | "large" | "full" | undefined;
        iconSize?: "default" | "small" | "tiny" | "medium" | "large" | "big" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        badge: {};
        default: {};
    };
};
export declare type AvatarProps = typeof __propDef.props;
export declare type AvatarEvents = typeof __propDef.events;
export declare type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};

 ```