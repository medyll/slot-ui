```ts 
__propDef: {
    props: {
        /** Number of steps */ steps?: StepType[] | undefined;
        /** orientation of the stepper */ stepperOrientation?: StepperOrientation | undefined;
        /** Actual active step */ activeStep?: number | undefined;
        /** ed actions for component */ actions?: {
            setActiveStep: (step: number) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};

 ```