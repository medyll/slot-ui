```typescript 
__propDef: {
    props: {
        steps?: {
            index: number;
            text: string;
            action: () => void;
        }[] | undefined;
        stepperOrientation?: ("vertical" | "horizontal") | undefined;
        setActiveStep?: ((step: number) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```