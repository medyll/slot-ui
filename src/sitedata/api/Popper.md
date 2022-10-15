```ts 
__propDef: {
    props: {
        /** popper HTMLDivElement */ element?: Element | undefined;
        class?: string | undefined;
        code?: string | undefined;
        parentNode?: HTMLElement | undefined;
        stickToHookWidth?: boolean | undefined;
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
        useStickTo?: ((node: any) => void) | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        popperHolder: {};
        holderSlot: {};
        default: {};
    };
};

 ```