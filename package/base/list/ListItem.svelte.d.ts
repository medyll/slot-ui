import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element: HTMLElement;
        icon: string;
        primary?: string | undefined;
        secondary: string;
        action: string;
        selected: boolean;
        showIcon?: boolean | undefined;
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
    get icon(): string;
    /**accessor*/
    set icon(_: string);
    get primary(): string | undefined;
    /**accessor*/
    set primary(_: string | undefined);
    get secondary(): string;
    /**accessor*/
    set secondary(_: string);
    get action(): string;
    /**accessor*/
    set action(_: string);
    get selected(): boolean;
    /**accessor*/
    set selected(_: boolean);
    get showIcon(): boolean | undefined;
    /**accessor*/
    set showIcon(_: boolean | undefined);
    get data(): Record<string, any> | undefined;
    /**accessor*/
    set data(_: Record<string, any> | undefined);
    get density(): "none" | "tight" | "default" | "kind" | undefined;
    /**accessor*/
    set density(_: "none" | "tight" | "default" | "kind" | undefined);
}
export {};
