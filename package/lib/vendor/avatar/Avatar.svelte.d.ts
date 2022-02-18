import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: "tiny" | "small" | "medium" | "large" | "full" | undefined;
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
