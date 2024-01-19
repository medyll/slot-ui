```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**  className off the root component  */ class?: string | undefined;
        /**  css style off the root component  */ style?: string | undefined;
        /** element initial HTMLDivElement props  */ initialRef?: HTMLElement | null | undefined;
        /** element onfirm HTMLDivElement props  */ contentRef?: HTMLElement | null | undefined;
        /** text displayed on confirm button */ tooltipInitial?: string | null | undefined;
        /** text displayed on confirm button */ primaryInitial?: string | undefined;
        /** icon displayed on the confirm button */ iconInitial?: string | undefined;
        /** color of the icon displayed on the confirm button */ iconColorInitial?: string | undefined;
        /** text displayed on confirm button */ primary?: string | undefined;
        /** icon displayed on the confirm button */ icon?: string | undefined;
        /** color of the icon displayed on the confirm button
            @type string
             */ iconColor?: string | undefined;
        /** action initiated on confirmation*/ action?: (() => void) | undefined;
        /** icon to display for back action */ iconCancel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    }; /** action initiated on confirmation*/
    slots: {
        initial: {};
        default: {};
    };
};
export type ConfirmProps = typeof __propDef.props;
export type ConfirmEvents = typeof __propDef.events;
export type ConfirmSlots = typeof __propDef.slots;
export default class Confirm extends SvelteComponent<ConfirmProps, ConfirmEvents, ConfirmSlots> {
}
export {};

 ```