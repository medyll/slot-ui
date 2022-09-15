```import { SvelteComponentTyped } from "svelte";
import type { IChromeOptionsArgs } from './types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        chromeListConfig?: IChromeOptionsArgs<Record<string, any>> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ChromeFrameListProps = typeof __propDef.props;
export declare type ChromeFrameListEvents = typeof __propDef.events;
export declare type ChromeFrameListSlots = typeof __propDef.slots;
export default class ChromeFrameList extends SvelteComponentTyped<ChromeFrameListProps, ChromeFrameListEvents, ChromeFrameListSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get chromeListConfig(): IChromeOptionsArgs<Record<string, any>> | undefined;
    /**accessor*/
    set chromeListConfig(_: IChromeOptionsArgs<Record<string, any>> | undefined);
}
export {};

 ```