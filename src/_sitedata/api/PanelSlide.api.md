```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open: boolean;
        actions?: {
            open: () => void;
            close: () => void;
            toggle: () => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
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
    };
    get open(): boolean;
    /**accessor*/
    set open(_: boolean);
}
export {};

 ```