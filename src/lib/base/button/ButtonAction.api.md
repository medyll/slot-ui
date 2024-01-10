```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
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
export type ButtonActionProps = typeof __propDef.props;
export type ButtonActionEvents = typeof __propDef.events;
export type ButtonActionSlots = typeof __propDef.slots;
export default class ButtonAction extends SvelteComponent<ButtonActionProps, ButtonActionEvents, ButtonActionSlots> {
}
export {};

 ```