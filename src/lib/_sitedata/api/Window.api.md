```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        frameId?: string | undefined;
        self?: null | undefined;
        defaultPosition?: {
            x: number;
            y: number;
        } | undefined;
        component?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type WindowProps = typeof __propDef.props;
export declare type WindowEvents = typeof __propDef.events;
export declare type WindowSlots = typeof __propDef.slots;
export default class Window extends SvelteComponentTyped<WindowProps, WindowEvents, WindowSlots> {
    get frameId(): string | undefined;
    /**accessor*/
    set frameId(_: string | undefined);
    get self(): null | undefined;
    /**accessor*/
    set self(_: null | undefined);
    get defaultPosition(): {
        x: number;
        y: number;
    } | undefined;
    /**accessor*/
    set defaultPosition(_: {
        x: number;
        y: number;
    } | undefined);
    get component(): null | undefined;
    /**accessor*/
    set component(_: null | undefined);
}
export {};

 ```