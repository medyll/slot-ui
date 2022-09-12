```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        parentElement?: HTMLDivElement | null | undefined;
        component: SvelteComponent;
        componentProps: Record<string, any>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        description: {};
    };
};

 ```