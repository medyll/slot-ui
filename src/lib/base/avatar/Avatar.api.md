```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        icon?: string | undefined;
        size?: "tiny" | "small" | "medium" | "large" | "full" | undefined;
        iconSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        avatarBadge: {};
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