```ts 
__propDef: {
    props: {
        frameId: string;
        showCommands: boolean;
    };
    events: {
        'chromeframe:hide': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | AnimationEvent | InputEvent | FocusEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        'chromeframe:close': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | AnimationEvent | InputEvent | FocusEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```