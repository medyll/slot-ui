```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name: string;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        label: {};
        default: {};
    };
};
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps, SwitchEvents, SwitchSlots> {
    get name(): string;
    /**accessor*/
    set name(_: string);
    get checked(): boolean | undefined;
    /**accessor*/
    set checked(_: boolean | undefined);
    get disabled(): boolean | undefined;
    /**accessor*/
    set disabled(_: boolean | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLElement | null | undefined;
    /**accessor*/
    set element(_: HTMLElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
}
export {};

 ```