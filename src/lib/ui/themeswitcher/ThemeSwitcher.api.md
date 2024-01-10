```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ThemeSwitcherProps = typeof __propDef.props;
export type ThemeSwitcherEvents = typeof __propDef.events;
export type ThemeSwitcherSlots = typeof __propDef.slots;
export default class ThemeSwitcher extends SvelteComponent<ThemeSwitcherProps, ThemeSwitcherEvents, ThemeSwitcherSlots> {
}
export {};

 ```