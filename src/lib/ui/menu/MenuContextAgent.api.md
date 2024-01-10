```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        menuAgent?: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MenuContextAgentProps = typeof __propDef.props;
export type MenuContextAgentEvents = typeof __propDef.events;
export type MenuContextAgentSlots = typeof __propDef.slots;
export default class MenuContextAgent extends SvelteComponent<MenuContextAgentProps, MenuContextAgentEvents, MenuContextAgentSlots> {
    get menuAgent(): {};
}
export {};

 ```