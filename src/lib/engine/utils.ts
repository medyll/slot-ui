
export type PropsProxyProps<T = any, B = any> = [string: keyof T, string: keyof B][]

export const propsProxy = <T = any, B = any, C = any>(props: PropsProxyProps<T, B>, data: any[]): Record<keyof B, any>[] => {

  let ret: any[] = [];
  for (const dta of data) {
    let out: any = {};

    for (const prop of props) {
      
      const keyListItem = prop[0] as string;
      const keyData: string | Function = prop[1] as any;
      
      out[keyListItem] = (typeof keyData === 'function')? keyData(dta): dta[keyData];
    }
    // keep original data
    out['data'] = dta;
    ret.push(out);
  }

  return ret;
};

export class dataOp {

  /** sorting  */
  static sortBy<T = Record<string, any>>(arr: T[], by: string, sortDir: string = 'asc') {

    const sortD = (sortDir === 'asc') ? 1 : -1;
    return [...arr].sort((a: T, b: T) => {
      return this.resolveDotPath(a, by) > this.resolveDotPath(b, by) ? sortD : this.resolveDotPath(b, by) > this.resolveDotPath(a, by) ? -sortD : 0
    })
  }

  /** search an object in an array */
  static filterList<T = any>(arr: T[], kw: number | string, fieldname: string = 'id'): T[] {

    return arr?.filter((item) => {
      return this.resolveDotPath(item, fieldname) === kw;
    });
  }

  /** resolve first founded object in array */
  static filterListFirst<T = any>(arr: T[], kw: number | string, fieldname: string = 'id'): T {

    return this.filterList<T>(arr, kw, fieldname)?.[0]
  }

  static searchList<T = any>(arr: T[], kw: number | string, fieldname: string = 'id'): T[] {

    let reg = new RegExp(`${kw}`, 'i');
    return arr.filter((item) => {
      return this.resolveDotPath(item, fieldname).search(reg)
    });
  }

  static groupBy(
    dataList: any[],
    groupField: string,
    opt?: { keepUngroupedData: boolean; fieldTitle?: string }
  ) {
    const out: any = [];

    return dataList.reduce((result, currentValue) => {
      const key = opt?.keepUngroupedData
        ? currentValue[groupField] ?? 'ungrouped'
        : currentValue[groupField];
      (result[key] = result[key] || []).push(currentValue);

      return result;
    }, {});

  };

  static resolveDotPath(object: Record<string, any>, path: string, defaultValue?: any): any {
    return path.split('.').reduce((r, s) => (r ? r[s] : defaultValue), object);
  }


  /**
   * 
   * @param arr array to find in
   * @param value value to seek for
   * @param key  object key to match with
   * @returns number
   */
  static findObjectIndex<T=Record<string,any>>(arr: T[], value: any, key: string = 'id'):number {
    return arr.findIndex((obj:T) => { 
      return this.resolveDotPath(obj,key)  === value;
    });
  }

}




