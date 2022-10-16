```import { SvelteComponentTyped } from "svelte";
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
        element: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ToastProps = typeof __propDef.props;
export declare type ToastEvents = typeof __propDef.events;
export declare type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponentTyped<ToastProps, ToastEvents, ToastSlots> {
}
export {};

 ```