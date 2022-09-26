```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        actions?: {
            show: () => void;
            hide: () => void;
            toggle: (lo?: boolean) => void;
            toggleLoading: (lo?: boolean) => void;
        } | undefined;
        showLogin?: boolean | undefined;
        transition?: {
            type: typeof fade;
            args: {};
        } | undefined;
        fields?: {
            email: string;
            password: string;
        } | undefined;
        loading?: boolean | undefined;
        onSubmit?: ((args: any) => Promise<unknown>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        slotAvatar: {};
        slotRetrievePassword: {};
        default: {};
    };
};

 ```