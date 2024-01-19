```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        value: number;
        ceiling: number;
        /**
             * position of the badge
             * @type {{ x: 'left' | 'right' | 'center'; y: 'top' | 'bottom' | 'center' }}
             */ position?: {
            x: 'left' | 'right' | 'center';
            y: 'top' | 'bottom' | 'center';
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};

 ```