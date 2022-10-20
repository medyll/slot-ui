```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        style?: string | undefined;
        icon?: string | null | undefined;
        primary?: string | null | undefined;
        secondary?: string | null | undefined;
        action?: string | null | undefined;
        selected?: boolean | undefined;
        showIcon?: boolean | undefined;
        showDivider?: boolean | undefined;
        dividerProps?: Record<string, any> | undefined;
        transition?: __sveltets_2_SvelteTransitionReturnType | undefined;
        disabled?: boolean | undefined;
        data?: Record<string, any> | undefined;
        density?: "medium" | "default" | "none" | "tight" | "kind" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        listItemIcon: {};
        icon: {};
        default: {};
        primary: {};
        listItemPrimary: {};
        listItemSecondary: {};
        secondary: {};
        listItemAction: {};
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
    get element(): HTMLElement | null | undefined;
    /**accessor*/
    set element(_: HTMLElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
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
    get selected(): boolean | undefined;
    /**accessor*/
    set selected(_: boolean | undefined);
    get showIcon(): boolean | undefined;
    /**accessor*/
    set showIcon(_: boolean | undefined);
    get showDivider(): boolean | undefined;
    /**accessor*/
    set showDivider(_: boolean | undefined);
    get dividerProps(): Record<string, any> | undefined;
    /**accessor*/
    set dividerProps(_: Record<string, any> | undefined);
    get transition(): __sveltets_2_SvelteTransitionReturnType | undefined;
    /**accessor*/
    set transition(_: __sveltets_2_SvelteTransitionReturnType | undefined);
    get disabled(): boolean | undefined;
    /**accessor*/
    set disabled(_: boolean | undefined);
    get data(): Record<string, any> | undefined;
    /**accessor*/
    set data(_: Record<string, any> | undefined);
    get density(): "medium" | "default" | "none" | "tight" | "kind" | undefined;
    /**accessor*/
    set density(_: "medium" | "default" | "none" | "tight" | "kind" | undefined);
}
export {};

 ```