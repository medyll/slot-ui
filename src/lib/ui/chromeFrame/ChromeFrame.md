```ts 
__propDef: {
    props: {
        frameId: string;
        showCommands: boolean;
    };
    events: {
        'chromeframe:hide': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | FocusEvent | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        'chromeframe:close': Event | MouseEvent | UIEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | FocusEvent | ClipboardEvent | AnimationEvent | InputEvent | CompositionEvent | DragEvent | ErrorEvent | FormDataEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```