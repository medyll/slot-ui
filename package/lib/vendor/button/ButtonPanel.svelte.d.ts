import { SvelteComponentTyped } from "svelte";
import type { SvelteComponentDev } from 'svelte/internal';
declare const __propDef: {
    props: {
        icon?: string | undefined;
        actionComponent: SvelteComponentDev;
        actionComponentProps: any;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ButtonPanelProps = typeof __propDef.props;
export declare type ButtonPanelEvents = typeof __propDef.events;
export declare type ButtonPanelSlots = typeof __propDef.slots;
export default class ButtonPanel extends SvelteComponentTyped<ButtonPanelProps, ButtonPanelEvents, ButtonPanelSlots> {
}
export {};
