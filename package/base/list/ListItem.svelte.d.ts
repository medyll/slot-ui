import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element: HTMLElement;
        icon?: string | null | undefined;
        primary?: string | null | undefined;
        secondary?: string | null | undefined;
        action?: string | null | undefined;
        selected: boolean;
        showIcon?: boolean | undefined;
        transition?: __sveltets_2_SvelteTransitionReturnType | undefined;
        data?: Record<string, any> | undefined;
        density?: "none" | "tight" | "default" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        primary: {};
        secondary: {};
        action: {};
    };
};
export declare type ListItemProps = typeof __propDef.props;
export declare type ListItemEvents = typeof __propDef.events;
export declare type ListItemSlots = typeof __propDef.slots;
export default class ListItem extends SvelteComponentTyped<ListItemProps, ListItemEvents, ListItemSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLElement;
    /**accessor*/
    set element(_: HTMLElement);
    get icon(): string | null | undefined;
    /**accessor*/
    set icon(_: string | null | undefined);
    get primary(): string | null | undefined;
    /**accessor*/
    set primary(_: string | null | undefined);
    get secondary(): string | null | undefined;
    /**accessor*/
    set secondary(_: string | null | undefined);
    get action(): string | null | undefined;
    /**accessor*/
    set action(_: string | null | undefined);
    get selected(): boolean;
    /**accessor*/
    set selected(_: boolean);
    get showIcon(): boolean | undefined;
    /**accessor*/
    set showIcon(_: boolean | undefined);
    get transition(): __sveltets_2_SvelteTransitionReturnType | undefined;
    /**accessor*/
    set transition(_: __sveltets_2_SvelteTransitionReturnType | undefined);
    get data(): Record<string, any> | undefined;
    /**accessor*/
    set data(_: Record<string, any> | undefined);
    get density(): "none" | "tight" | "default" | "kind" | undefined;
    /**accessor*/
    set density(_: "none" | "tight" | "default" | "kind" | undefined);
}
export {};