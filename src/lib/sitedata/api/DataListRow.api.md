```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | undefined;
        data: any;
    };
    events: {
        'datalist:sort:clicked': Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
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
}
export {};

 ```