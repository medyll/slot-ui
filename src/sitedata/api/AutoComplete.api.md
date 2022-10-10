```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        data?: any;
        searchField?: string | undefined;
        dataFieldName?: string | string[] | undefined;
        mode?: "exact" | "partial" | undefined;
        filteredData?: any[] | undefined;
        selectedIndex?: number | undefined;
        onPick?: ((args: any) => void) | undefined;
    };
    events: {
        pick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            menuItemData: any;
        };
        emptySearchString: {};
        emptySearch: {};
    };
};
export declare type AutoCompleteProps = typeof __propDef.props;
export declare type AutoCompleteEvents = typeof __propDef.events;
export declare type AutoCompleteSlots = typeof __propDef.slots;
export default class AutoComplete extends SvelteComponentTyped<AutoCompleteProps, AutoCompleteEvents, AutoCompleteSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | null | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | null | undefined);
    get data(): any;
    /**accessor*/
    set data(_: any);
    get searchField(): string | undefined;
    /**accessor*/
    set searchField(_: string | undefined);
    get dataFieldName(): string | string[] | undefined;
    /**accessor*/
    set dataFieldName(_: string | string[] | undefined);
    get mode(): "exact" | "partial" | undefined;
    /**accessor*/
    set mode(_: "exact" | "partial" | undefined);
    get filteredData(): any[] | undefined;
    /**accessor*/
    set filteredData(_: any[] | undefined);
    get selectedIndex(): number | undefined;
    /**accessor*/
    set selectedIndex(_: number | undefined);
    get onPick(): ((args: any) => void) | undefined;
    /**accessor*/
    set onPick(_: ((args: any) => void) | undefined);
}
export {};

 ```