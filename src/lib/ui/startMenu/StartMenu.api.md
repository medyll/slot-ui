```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StartMenuProps = typeof __propDef.props;
export type StartMenuEvents = typeof __propDef.events;
export type StartMenuSlots = typeof __propDef.slots;
export default class StartMenu extends SvelteComponent<StartMenuProps, StartMenuEvents, StartMenuSlots> {
}
export {};

 ```