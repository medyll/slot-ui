```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLButtonElement | null | undefined;
        icon?: string | undefined;
        actionComponent: SvelteComponentDev;
        actionComponentProps: any;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```