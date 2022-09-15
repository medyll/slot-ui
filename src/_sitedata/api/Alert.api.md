```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** type of levels */ level?: ("error" | "success" | "info" | "warning" | "alert" | "discrete") | undefined;
        action?: (() => void) | undefined;
        data?: {} | undefined;
        text?: string | undefined;
        message?: string | undefined;
        isDragable?: boolean | undefined;
        isOpen?: boolean | undefined;
        actions?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        topButtonSlot: {};
        messageSlot: {};
        buttonZoneSlot: {};
    };
};
export declare type AlertProps = typeof __propDef.props;
export declare type AlertEvents = typeof __propDef.events;
export declare type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
    get actions(): any;
}
export {};

 ```