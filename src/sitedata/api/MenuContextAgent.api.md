```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        menuAgent?: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MenuContextAgentProps = typeof __propDef.props;
export declare type MenuContextAgentEvents = typeof __propDef.events;
export declare type MenuContextAgentSlots = typeof __propDef.slots;
export default class MenuContextAgent extends SvelteComponentTyped<MenuContextAgentProps, MenuContextAgentEvents, MenuContextAgentSlots> {
    get menuAgent(): unknown;
}
export {};

 ```