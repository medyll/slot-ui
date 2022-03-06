export declare type propsXyProps<T = any, B = any> = [string: keyof T, string: keyof B][];
export declare const propsXy: <T = any, B = any, C = any>(props: propsXyProps<T, B>, data: any[]) => Record<keyof B, any>[];
export declare const toFa: (strIn: string) => string;
