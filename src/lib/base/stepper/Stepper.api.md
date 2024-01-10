```import { SvelteComponent } from "svelte";
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepType = {
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
export type StepperProps = typeof __propDef.props;
export type StepperEvents = typeof __propDef.events;
export type StepperSlots = typeof __propDef.slots;
export default class Stepper extends SvelteComponent<StepperProps, StepperEvents, StepperSlots> {
    get actions(): {
        setActiveStep: (step: number) => void;
    };
}
export {};

 ```