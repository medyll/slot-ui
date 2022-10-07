```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        style?: string | undefined;
        open: boolean;
        component?: null | undefined;
        flow?: ElementProps["flow"] | undefined;
        outer?: boolean | undefined;
        panelSlideId?: string | undefined;
        actions?: {
            open: () => void;
            close: () => void;
            toggle: () => void;
            hasNextPrev: (nextPrev: "next" | "prev") => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            panelSlideId: string;
            data: any;
        };
    };
};
export declare type PanelSlideProps = typeof __propDef.props;
export declare type PanelSlideEvents = typeof __propDef.events;
export declare type PanelSlideSlots = typeof __propDef.slots;
export default class PanelSlide extends SvelteComponentTyped<PanelSlideProps, PanelSlideEvents, PanelSlideSlots> {
    get actions(): {
        open: () => void;
        close: () => void;
        toggle: () => void;
        hasNextPrev: (nextPrev: "prev" | "next") => void;
    };
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLInputElement | null | undefined;
    /**accessor*/
    set element(_: HTMLInputElement | null | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get open(): boolean;
    /**accessor*/
    set open(_: boolean);
    get component(): null | undefined;
    /**accessor*/
    set component(_: null | undefined);
    get flow(): any;
    /**accessor*/
    set flow(_: any);
    get outer(): boolean | undefined;
    /**accessor*/
    set outer(_: boolean | undefined);
    get panelSlideId(): string | undefined;
    /**accessor*/
    set panelSlideId(_: string | undefined);
}
export {};

 ```