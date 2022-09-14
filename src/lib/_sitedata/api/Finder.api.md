```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        defaultField?: string | undefined;
        showSortMenu?: boolean | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        noResultsSlot: {};
        loadingSlot: {};
    };
};
export declare type FinderProps = typeof __propDef.props;
export declare type FinderEvents = typeof __propDef.events;
export declare type FinderSlots = typeof __propDef.slots;
export default class Finder extends SvelteComponentTyped<FinderProps, FinderEvents, FinderSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get data(): any;
    /**accessor*/
    set data(_: any);
    get defaultField(): string | undefined;
    /**accessor*/
    set defaultField(_: string | undefined);
    get showSortMenu(): boolean | undefined;
    /**accessor*/
    set showSortMenu(_: boolean | undefined);
    get mode(): "exact" | "partial" | undefined;
    /**accessor*/
    set mode(_: "exact" | "partial" | undefined);
    get filteredData(): any[] | undefined;
    /**accessor*/
    set filteredData(_: any[] | undefined);
}
export {};

 ```