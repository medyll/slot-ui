```import { SvelteComponent } from "svelte";
import type { SvelteComponentDev } from 'svelte/internal';
declare const __propDef: {
    props: {
        [x: string]: any;
        toastId?: any;
        autoClose?: boolean | undefined;
        autoCloseDelay?: number | undefined;
        component?: SvelteComponentDev | undefined;
        componentProps?: any | undefined;
        toasterId?: any;
        element: HTMLDivElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponent<ToastProps, ToastEvents, ToastSlots> {
}
export {};

 ```