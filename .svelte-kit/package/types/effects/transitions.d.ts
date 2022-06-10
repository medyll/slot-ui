declare type DurationDelayType = {
    duration: number;
    delay: number;
};
declare function slideOut(node: HTMLElement, { duration, delay }: DurationDelayType): {
    duration: number;
    delay: number;
    css: (t: number) => string;
};
declare function slideOutRt(node: HTMLElement, { duration, delay }: DurationDelayType): {
    duration: number;
    delay: number;
    css: (t: number) => string;
};
declare function slideIn(node: HTMLElement, { duration, delay }: DurationDelayType): {
    duration: number;
    delay: number;
    css: (t: number) => string;
};
declare function slideInRtl(node: HTMLElement, { duration, delay }: DurationDelayType): {
    duration: number;
    delay: number;
    css: (t: number) => string;
};
export declare const transitions: {
    slideOut: typeof slideOut;
    slideOutRt: typeof slideOutRt;
    slideIn: typeof slideIn;
    slideInRtl: typeof slideInRtl;
};
export {};
