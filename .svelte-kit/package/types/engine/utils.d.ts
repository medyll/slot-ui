export declare type PropsProxyProps<T = any, B = any> = [string: keyof T, string: keyof B][];
export declare const propsProxy: <T = any, B = any, C = any>(props: PropsProxyProps<T, B>, data: any[]) => Record<keyof B, any>[];
export declare class dataOp {
    /** sorting  */
    static sortBy<T = Record<string, any>>(arr: T[], by: string, sortDir?: string): T[];
    /** search an object in an array */
    static filterList<T = any>(arr: T[], kw: number | string, fieldname?: string): T[];
    /** resolve first founded object in array */
    static filterListFirst<T = any>(arr: T[], kw: number | string, fieldname?: string): T;
    static searchList<T = any>(arr: T[], kw: number | string, fieldname?: string): T[];
    static groupBy(dataList: any[], groupField: string, opt?: {
        keepUngroupedData: boolean;
        fieldTitle?: string;
    }): any;
    static resolveDotPath(object: Record<string, any>, path: string, defaultValue?: any): any;
    /** @deprecated */
    static getObjectItemById<T = any>(arr: T[], id: number | string, idname?: string): T[];
}
