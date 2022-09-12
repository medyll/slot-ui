```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** text displayed on confirm button */ tooltipInitial?: string | undefined;
        /** text displayed on confirm button */ primaryInitial?: string | undefined;
        /** icon displayed on the confirm button */ iconInitial?: string | undefined;
        /** color of the icon displayed on the confirm button */ iconColorInitial?: string | undefined;
        /** text displayed on confirm button */ primary?: string | undefined;
        /** icon displayed on the confirm button */ icon?: string | undefined;
        /** color of the icon displayed on the confirm button */ iconColor?: string | undefined;
        /** action initiated on confirmation*/ action?: (() => void) | undefined;
        /** icon to display for back action */ cancelIcon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        initial: {};
        default: {};
    };
};
export declare type ConfirmProps = typeof __propDef.props;
export declare type ConfirmEvents = typeof __propDef.events;
export declare type ConfirmSlots = typeof __propDef.slots;
export default class Confirm extends SvelteComponentTyped<ConfirmProps, ConfirmEvents, ConfirmSlots> {
}
export {};

 ```