```import { SvelteComponent } from "svelte";
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
        titleBarIcon: {};
        titleBarTitle: {};
    };
};
export type TitleBarProps = typeof __propDef.props;
export type TitleBarEvents = typeof __propDef.events;
export type TitleBarSlots = typeof __propDef.slots;
export default class TitleBar extends SvelteComponent<TitleBarProps, TitleBarEvents, TitleBarSlots> {
}
export {};

 ```