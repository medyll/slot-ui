```ts 
__propDef: {
    props: {
        /** popper HTMLDivElement */ element?: HTMLElement | undefined;
        class?: string | undefined;
        code?: string | undefined;
        parentNode?: HTMLElement | undefined;
        component?: SvelteComponentDev | undefined;
        componentProps?: {} | undefined;
        position?: StickToPositionType | undefined;
        content?: any | undefined;
        style?: string | undefined;
        /** The popper will be closed on clickAway*/ autoClose?: boolean | undefined;
        /** binding : The popper will be opened or is opened */ isOpen?: boolean | undefined;
        toggle?: (() => void) | undefined;
        hide?: (() => void) | undefined;
        show?: (() => void) | undefined;
        clickedAway?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        holderSlot: {};
        default: {};
    };
};

 ```