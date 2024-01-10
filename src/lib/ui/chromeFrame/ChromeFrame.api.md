```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        frameId: string;
        showCommands: boolean;
    };
    events: {
        'chromeframe:hide': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | FocusEvent | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        'chromeframe:close': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | FocusEvent | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChromeFrameProps = typeof __propDef.props;
export type ChromeFrameEvents = typeof __propDef.events;
export type ChromeFrameSlots = typeof __propDef.slots;
export default class ChromeFrame extends SvelteComponent<ChromeFrameProps, ChromeFrameEvents, ChromeFrameSlots> {
    get frameId(): string;
    /**accessor*/
    set frameId(_: string);
    get showCommands(): boolean;
    /**accessor*/
    set showCommands(_: boolean);
}
export {};

 ```