import { SvelteComponentTyped } from "svelte";
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
export declare type ChromeFrameButtonListProps = typeof __propDef.props;
export declare type ChromeFrameButtonListEvents = typeof __propDef.events;
export declare type ChromeFrameButtonListSlots = typeof __propDef.slots;
export default class ChromeFrameButtonList extends SvelteComponentTyped<ChromeFrameButtonListProps, ChromeFrameButtonListEvents, ChromeFrameButtonListSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
}
export {};
