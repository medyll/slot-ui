```import { SvelteComponent } from "svelte";
import type { IChromeOptionsArgs } from './types.js';
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        chromeListConfig?: IChromeOptionsArgs | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChromeFrameListProps = typeof __propDef.props;
export type ChromeFrameListEvents = typeof __propDef.events;
export type ChromeFrameListSlots = typeof __propDef.slots;
export default class ChromeFrameList extends SvelteComponent<ChromeFrameListProps, ChromeFrameListEvents, ChromeFrameListSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get chromeListConfig(): IChromeOptionsArgs | undefined;
    /**accessor*/
    set chromeListConfig(_: IChromeOptionsArgs | undefined);
}
export {};

 ```