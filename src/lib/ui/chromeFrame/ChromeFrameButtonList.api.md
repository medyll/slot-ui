```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /** common slotUi exports*/ class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            chromeFrame: import("./types").IChromeFrameArgs<Record<string, any>>;
        };
    };
};
export type ChromeFrameButtonListProps = typeof __propDef.props;
export type ChromeFrameButtonListEvents = typeof __propDef.events;
export type ChromeFrameButtonListSlots = typeof __propDef.slots;
export default class ChromeFrameButtonList extends SvelteComponent<ChromeFrameButtonListProps, ChromeFrameButtonListEvents, ChromeFrameButtonListSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
}
export {};

 ```