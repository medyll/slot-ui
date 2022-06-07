import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        title: string | undefined;
        isOpen?: boolean | undefined;
        hideCloseIcon?: boolean | undefined;
        /**
           * position
           * @type 'wide' | 'inplace'
           */ position?: "wide" | "inplace" | undefined;
        stickTo?: "left" | "right" | undefined;
        showOpenerIcon?: boolean | undefined;
        toggle?: ((visibleSate?: boolean | undefined) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        drawerMenuBar: {};
        default: {};
        drawerBottomBarSlot: {};
    };
};
export declare type DrawerProps = typeof __propDef.props;
export declare type DrawerEvents = typeof __propDef.events;
export declare type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
    get toggle(): (visibleSate?: boolean | undefined) => void;
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get title(): string | undefined;
    /**accessor*/
    set title(_: string | undefined);
    get isOpen(): boolean | undefined;
    /**accessor*/
    set isOpen(_: boolean | undefined);
    get hideCloseIcon(): boolean | undefined;
    /**accessor*/
    set hideCloseIcon(_: boolean | undefined);
    get position(): "wide" | "inplace" | undefined;
    /**accessor*/
    set position(_: "wide" | "inplace" | undefined);
    get stickTo(): "left" | "right" | undefined;
    /**accessor*/
    set stickTo(_: "left" | "right" | undefined);
    get showOpenerIcon(): boolean | undefined;
    /**accessor*/
    set showOpenerIcon(_: boolean | undefined);
    get undefined(): any;
    /**accessor*/
    set undefined(_: any);
}
export {};
