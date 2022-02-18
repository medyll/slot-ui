import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string | undefined;
        isOpen?: boolean | undefined;
        hideCloseIcon?: boolean | undefined;
        toggle?: ((visibleSate?: boolean | undefined) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        drawerMenuBar: {};
        content: {};
    };
};
export declare type DrawerProps = typeof __propDef.props;
export declare type DrawerEvents = typeof __propDef.events;
export declare type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
    get toggle(): (visibleSate?: boolean | undefined) => void;
}
export {};
