import { SvelteComponentTyped } from "svelte";
import type { SvelteComponentDev } from 'svelte/internal';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
        icon?: string | undefined;
        actionComponent: SvelteComponentDev;
        actionComponentProps: any;
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
export declare type ButtonActionProps = typeof __propDef.props;
export declare type ButtonActionEvents = typeof __propDef.events;
export declare type ButtonActionSlots = typeof __propDef.slots;
export default class ButtonAction extends SvelteComponentTyped<ButtonActionProps, ButtonActionEvents, ButtonActionSlots> {
}
export {};
