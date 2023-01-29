```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        element?: HTMLElement | undefined;
        class?: string | undefined;
        style?: string | undefined;
        field?: string | undefined;
        fieldType?: string | undefined;
        columnId?: string | number | undefined;
        noWrap?: boolean | undefined;
        title?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            fieldData: any;
        };
    };
};
export declare type DataListCellProps = typeof __propDef.props;
export declare type DataListCellEvents = typeof __propDef.events;
export declare type DataListCellSlots = typeof __propDef.slots;
export default class DataListCell extends SvelteComponentTyped<DataListCellProps, DataListCellEvents, DataListCellSlots> {
    get element(): HTMLElement | undefined;
    /**accessor*/
    set element(_: HTMLElement | undefined);
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
    get field(): string | undefined;
    /**accessor*/
    set field(_: string | undefined);
    get fieldType(): string | undefined;
    /**accessor*/
    set fieldType(_: string | undefined);
    get columnId(): string | number | undefined;
    /**accessor*/
    set columnId(_: string | number | undefined);
    get noWrap(): boolean | undefined;
    /**accessor*/
    set noWrap(_: boolean | undefined);
    get title(): string | undefined;
    /**accessor*/
    set title(_: string | undefined);
}
export {};

 ```