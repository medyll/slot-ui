```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** title of the drawer */ primary?: string | undefined;
        /** sub-title of the drawer */ secondary?: string | undefined;
        /** icon of the drawer */ icon?: string | undefined;
        /** Should the drawer be open */ isOpen?: boolean | undefined;
        /** Should the closer icon be hidden */ hideCloseIcon?: boolean | undefined;
        /**
             * position
             * @type 'wide' | 'inplace'
             */ flow?: "relative" | "absolute" | "fixed" | undefined;
        stickTo?: "left" | "right" | "top" | "bottom" | undefined;
        showOpenerIcon?: boolean | undefined;
        toggle?: ((visibleSate?: boolean) => void) | undefined;
        /** should be used  */ actions?: {
            toggle: (visibleSate?: boolean) => void;
        } | undefined;
        /** default width of the drawer in vertical mode */ defaultWidth?: string | undefined;
        /** minimum width of the drawer in vertical mode and closed state */ defaultVisibleArea?: string | undefined;
        /** default height of the drawer in horizontal mode */ defaultHeight?: string | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        iconSlot: {};
        topSlot: {};
        default: {};
        bottomSlot: {};
    };
};
export declare type DrawerProps = typeof __propDef.props;
export declare type DrawerEvents = typeof __propDef.events;
export declare type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
    get toggle(): (visibleSate?: boolean | undefined) => void;
    get actions(): {
        toggle: (visibleSate?: boolean | undefined) => void;
    };
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get primary(): string | undefined;
    /**accessor*/
    set primary(_: string | undefined);
    get secondary(): string | undefined;
    /**accessor*/
    set secondary(_: string | undefined);
    get icon(): string | undefined;
    /**accessor*/
    set icon(_: string | undefined);
    get isOpen(): boolean | undefined;
    /**accessor*/
    set isOpen(_: boolean | undefined);
    get hideCloseIcon(): boolean | undefined;
    /**accessor*/
    set hideCloseIcon(_: boolean | undefined);
    get flow(): "relative" | "absolute" | "fixed" | undefined;
    /**accessor*/
    set flow(_: "relative" | "absolute" | "fixed" | undefined);
    get stickTo(): "left" | "right" | "top" | "bottom" | undefined;
    /**accessor*/
    set stickTo(_: "left" | "right" | "top" | "bottom" | undefined);
    get showOpenerIcon(): boolean | undefined;
    /**accessor*/
    set showOpenerIcon(_: boolean | undefined);
    get undefined(): any;
    /**accessor*/
    set undefined(_: any);
    get defaultWidth(): string | undefined;
    /**accessor*/
    set defaultWidth(_: string | undefined);
    get defaultVisibleArea(): string | undefined;
    /**accessor*/
    set defaultVisibleArea(_: string | undefined);
    get defaultHeight(): string | undefined;
    /**accessor*/
    set defaultHeight(_: string | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
}
export {};

 ```