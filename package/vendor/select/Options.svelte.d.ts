import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from 'src/types';
declare const __propDef: {
    props: {
        data?: ElementProps['data'] | undefined;
        text?: string | undefined;
        icon?: any | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type OptionsProps = typeof __propDef.props;
export declare type OptionsEvents = typeof __propDef.events;
export declare type OptionsSlots = typeof __propDef.slots;
export default class Options extends SvelteComponentTyped<OptionsProps, OptionsEvents, OptionsSlots> {
}
export {};
