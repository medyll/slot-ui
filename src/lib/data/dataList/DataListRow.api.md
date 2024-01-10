```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        data: any;
        style?: string | undefined;
    };
    events: {
        'datalist:sort:clicked': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | FocusEvent | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DataListRowProps = typeof __propDef.props;
export type DataListRowEvents = typeof __propDef.events;
export type DataListRowSlots = typeof __propDef.slots;
export default class DataListRow extends SvelteComponent<DataListRowProps, DataListRowEvents, DataListRowSlots> {
    get class(): string | undefined;
    /**accessor*/
    set class(_: string | undefined);
    get element(): HTMLDivElement | undefined;
    /**accessor*/
    set element(_: HTMLDivElement | undefined);
    get data(): any;
    /**accessor*/
    set data(_: any);
    get style(): string | undefined;
    /**accessor*/
    set style(_: string | undefined);
}
export {};

 ```