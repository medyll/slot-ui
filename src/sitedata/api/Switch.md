```ts 
__propDef: {
    props: {
        name: string;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        switchLabel: {};
        label: {};
        default: {};
    };
};

 ```