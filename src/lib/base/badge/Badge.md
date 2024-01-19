```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        value: number;
        ceiling: number;
        /**
             * position of the badge
             * @type {{ x: 'left' | 'right' | 'center'; y: 'top' | 'bottom' | 'center' }}
             */ position?: {
            x: 'left' | 'right' | 'center';
            y: 'top' | 'bottom' | 'center';
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```