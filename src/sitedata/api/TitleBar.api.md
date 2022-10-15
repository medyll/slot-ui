```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        onClose: () => void;
        hasMenu?: any;
        icon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        iconSlot: {};
        titleBarTitle: {};
    };
};
export declare type TitleBarProps = typeof __propDef.props;
export declare type TitleBarEvents = typeof __propDef.events;
export declare type TitleBarSlots = typeof __propDef.slots;
export default class TitleBar extends SvelteComponentTyped<TitleBarProps, TitleBarEvents, TitleBarSlots> {
}
export {};

 ```