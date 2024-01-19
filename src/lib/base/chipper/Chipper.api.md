```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**  className off the root component  */ class?: string | undefined;
        /**  css style off the root component  */ style?: string | undefined;
        /** element root HTMLDivElement props  */ element?: HTMLDivElement | null | undefined;
        /** position of the chipper
          @type {'top' | 'bottom' | 'left' | 'right'}
           */ position?: "left" | "right" | "top" | "bottom" | undefined;
        /** theme color of the chip
          @type {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark'}
           */ bgTheme?: string | undefined;
        /** css color code for the chip */ color?: string | undefined;
        /** text or html is slot is not used */ content?: string | undefined;
        /** show or hide the chip */ showChip?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        chipperChip: {};
    };
};
export type ChipperProps = typeof __propDef.props;
export type ChipperEvents = typeof __propDef.events;
export type ChipperSlots = typeof __propDef.slots;
export default class Chipper extends SvelteComponent<ChipperProps, ChipperEvents, ChipperSlots> {
}
export {};

 ```