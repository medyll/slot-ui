```ts 
__propDef: {
    props: {
        name: string;
        checked: boolean;
        disabled?: boolean | undefined;
        value: any;
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        label: {};
        default: {};
    };
};

 ```