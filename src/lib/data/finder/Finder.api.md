```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        classRoot?: string | undefined;
        styleRoot?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        defaultField?: string | undefined;
        showSortMenu?: boolean | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
        sizeRoot?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
        size?: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FinderProps = typeof __propDef.props;
export type FinderEvents = typeof __propDef.events;
export type FinderSlots = typeof __propDef.slots;
export default class Finder extends SvelteComponent<FinderProps, FinderEvents, FinderSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get classRoot(): string | undefined;
    /**accessor*/
    set classRoot(_: string | undefined);
    get styleRoot(): string | undefined;
    /**accessor*/
    set styleRoot(_: string | undefined);
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
    get sizeRoot(): "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    /**accessor*/
    set sizeRoot(_: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined);
    get size(): "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined;
    /**accessor*/
    set size(_: "tiny" | "small" | "medium" | "default" | "large" | "big" | "full" | "auto" | undefined);
}
export {};

 ```