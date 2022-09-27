```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        data: any;
    };
    events: {
        'datalist:sort:clicked': Event | MouseEvent | UIEvent | PointerEvent | FocusEvent | ProgressEvent<EventTarget> | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DataListRowProps = typeof __propDef.props;
export declare type DataListRowEvents = typeof __propDef.events;
export declare type DataListRowSlots = typeof __propDef.slots;
export default class DataListRow extends SvelteComponentTyped<DataListRowProps, DataListRowEvents, DataListRowSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | undefined);
    get data(): any;
    /**accessor*/
    set data(_: any);
}
export {};

 ```