```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        /** show or hide the backdrop */ isOpen?: boolean | undefined;
        /** if in loading state, it will show a loading icon or $$slots.loadingSlot */ isLoading?: boolean | undefined;
        /** css position mode of the backdrop */ flow?: "relative" | "absolute" | "fixed" | undefined;
        /** auto-close backdrop on click */ autoClose?: boolean | undefined;
        /** Backdrop controller */ actions?: {
            close: () => void;
            open: () => void;
        } | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        backdropLoading: {};
        default: {};
    };
};
export type BackdropProps = typeof __propDef.props;
export type BackdropEvents = typeof __propDef.events;
export type BackdropSlots = typeof __propDef.slots;
export default class Backdrop extends SvelteComponent<BackdropProps, BackdropEvents, BackdropSlots> {
    get actions(): {
        close: () => void;
        open: () => void;
    };
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get isOpen(): boolean | undefined;
    /**accessor*/
    set isOpen(_: boolean | undefined);
    get isLoading(): boolean | undefined;
    /**accessor*/
    set isLoading(_: boolean | undefined);
    get flow(): "relative" | "absolute" | "fixed" | undefined;
    /**accessor*/
    set flow(_: "relative" | "absolute" | "fixed" | undefined);
    get autoClose(): boolean | undefined;
    /**accessor*/
    set autoClose(_: boolean | undefined);
}
export {};

 ```