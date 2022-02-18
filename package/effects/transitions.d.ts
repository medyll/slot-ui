declare function slideOut(node: any, { duration, delay }: {
    duration: any;
    delay: any;
}): {
    duration: any;
    delay: any;
    css: (t: any) => string;
};
declare function slideOutRt(node: any, { duration, delay }: {
    duration: any;
    delay: any;
}): {
    duration: any;
    delay: any;
    css: (t: any) => string;
};
declare function slideIn(node: any, { duration, delay }: {
    duration: any;
    delay: any;
}): {
    duration: any;
    delay: any;
    css: (t: any) => string;
};
declare function slideInRtl(node: any, { duration, delay }: {
    duration: any;
    delay: any;
}): {
    duration: any;
    delay: any;
    css: (t: any) => string;
};
export declare const transitions: {
    slideOut: typeof slideOut;
    slideOutRt: typeof slideOutRt;
    slideIn: typeof slideIn;
    slideInRtl: typeof slideInRtl;
};
export {};
