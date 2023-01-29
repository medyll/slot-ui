```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        /** panelId will be bound to the targeted panelSlide */ panelId?: string | undefined;
        /** data will be bound to the targeted panelSlide */ data?: any | undefined;
        /** data will be bound to the targeted panelSlide */ showNavigation?: boolean | undefined;
        actions?: {
            load: (args: any) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        panelButtonPrevious: {};
        panelButtonNext: {};
        default: {
            panelId: string;
            actions: {
                load: (args: any) => void;
            };
        };
    };
};
export declare type PanelProps = typeof __propDef.props;
export declare type PanelEvents = typeof __propDef.events;
export declare type PanelSlots = typeof __propDef.slots;
export default class Panel extends SvelteComponentTyped<PanelProps, PanelEvents, PanelSlots> {
    get actions(): {
        load: (args: any) => void;
    };
    get title(): string | undefined;
    /**accessor*/
    set title(_: string | undefined);
    get panelId(): string | undefined;
    /**accessor*/
    set panelId(_: string | undefined);
    get data(): any;
    /**accessor*/
    set data(_: any);
    get showNavigation(): boolean | undefined;
    /**accessor*/
    set showNavigation(_: boolean | undefined);
}
export {};

 ```