```import { SvelteComponentTyped } from "svelte";
import type { ElementProps } from '$typings/index.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLInputElement | null | undefined;
        data?: ElementProps['data'] | undefined;
        options?: {
            data?: Record<string, any> | undefined;
            text: string;
            icon?: any;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            option: {
                data?: Record<string, any> | undefined;
                text: string;
                icon?: any;
            };
        };
    };
};
export declare type SelectProps = typeof __propDef.props;
export declare type SelectEvents = typeof __propDef.events;
export declare type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};

 ```