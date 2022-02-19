import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** type of levels */ level?: ("error" | "success" | "info" | "warning" | "alert" | "discrete") | undefined;
        action: undefined;
        data: undefined;
        text: string;
        message: string;
        isDragable?: boolean | undefined;
        isOpen?: boolean | undefined;
        actions?: {
            open: () => void;
            toggle: () => void;
            close: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        messageSlot: {};
        action: {};
        buttonZoneSlot: {};
    };
};
export declare type AlertProps = typeof __propDef.props;
export declare type AlertEvents = typeof __propDef.events;
export declare type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
    get actions(): {
        open: () => void;
        toggle: () => void;
        close: () => void;
    };
}
export {};
