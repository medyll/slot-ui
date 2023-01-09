```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | null | undefined;
        color?: string | undefined;
        vertical?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        separator: {};
    };
};
export declare type ToolBarProps = typeof __propDef.props;
export declare type ToolBarEvents = typeof __propDef.events;
export declare type ToolBarSlots = typeof __propDef.slots;
export default class ToolBar extends SvelteComponentTyped<ToolBarProps, ToolBarEvents, ToolBarSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get style(): string | null | undefined;
    /**accessor*/
    set style(_: string | null | undefined);
    get color(): string | undefined;
    /**accessor*/
    set color(_: string | undefined);
    get vertical(): boolean | undefined;
    /**accessor*/
    set vertical(_: boolean | undefined);
}
export {};

 ```