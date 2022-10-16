```ts 
__propDef: {
    props: {
        title?: string | undefined;
        /** panelId will be bound to the targeted panelSlide */ panelId?: string | undefined;
        /** data will be bound to the targeted panelSlide */ data?: any | undefined;
        /** data will be bound to the targeted panelSlide */ showNavigation?: boolean | undefined;
        actions?: {
            load: (args: any) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            panelId: string;
            actions: {
                load: (args: any) => void;
            };
        };
    };
};

 ```