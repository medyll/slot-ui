```ts 
__propDef: {
    props: {
        onClose: () => void;
        hasMenu?: any;
        icon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        titleBarIcon: {};
        titleBarTitle: {};
    };
};

 ```