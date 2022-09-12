```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        frameId: string;
        showCommands: boolean;
    };
    events: {
        'chromeframe:hide': Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        'chromeframe:close': Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ChromeFrameProps = typeof __propDef.props;
export declare type ChromeFrameEvents = typeof __propDef.events;
export declare type ChromeFrameSlots = typeof __propDef.slots;
export default class ChromeFrame extends SvelteComponentTyped<ChromeFrameProps, ChromeFrameEvents, ChromeFrameSlots> {
    get frameId(): string;
    /**accessor*/
    set frameId(_: string);
    get showCommands(): boolean;
    /**accessor*/
    set showCommands(_: boolean);
}
export {};

 ```