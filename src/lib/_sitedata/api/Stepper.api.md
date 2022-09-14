```import { SvelteComponentTyped } from "svelte";
export declare type StepperOrientation = 'horizontal' | 'vertical';
export declare type StepType = {
    index: number;
    text: string;
    action: () => void;
};
declare const __propDef: {
    props: {
        /** Number of steps */ steps?: StepType[] | undefined;
        /** orientation of the stepper */ stepperOrientation?: StepperOrientation | undefined;
        /** Actual active step */ activeStep?: number | undefined;
        /** exported actions for component */ actions?: {
            setActiveStep: (step: number) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StepperProps = typeof __propDef.props;
export declare type StepperEvents = typeof __propDef.events;
export declare type StepperSlots = typeof __propDef.slots;
export default class Stepper extends SvelteComponentTyped<StepperProps, StepperEvents, StepperSlots> {
    get actions(): {
        setActiveStep: (step: number) => void;
    };
}
export {};

 ```