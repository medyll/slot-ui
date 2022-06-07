export declare type PropsProxyProps<T = any, B = any> = [string: keyof T, string: keyof B][];
export declare const propsProxy: <T = any, B = any, C = any>(props: PropsProxyProps<T, B>, data: any[]) => Record<keyof B, any>[];
