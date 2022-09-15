```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
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
export declare type StepperProps = typeof __propDef.props;
export declare type StepperEvents = typeof __propDef.events;
export declare type StepperSlots = typeof __propDef.slots;
export default class Stepper extends SvelteComponentTyped<StepperProps, StepperEvents, StepperSlots> {
    get setActiveStep(): (step: number) => void;
}
export {};

 ```