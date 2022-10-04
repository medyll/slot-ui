```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name: string;
        checked: boolean;
        disabled?: boolean | undefined;
        value: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
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
export declare type SwitchProps = typeof __propDef.props;
export declare type SwitchEvents = typeof __propDef.events;
export declare type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponentTyped<SwitchProps, SwitchEvents, SwitchSlots> {
    get name(): string;
    /**accessor*/
    set name(_: string);
    get checked(): boolean;
    /**accessor*/
    set checked(_: boolean);
    get disabled(): boolean | undefined;
    /**accessor*/
    set disabled(_: boolean | undefined);
    get value(): any;
    /**accessor*/
    set value(_: any);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
}
export {};

 ```