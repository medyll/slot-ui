
export type PropsProxyProps<T = any, B = any> = [string: keyof T, string: keyof B][]

export const propsProxy = <T = any, B = any, C = any>(props: PropsProxyProps<T, B>, data: any[]): Record<keyof B, any>[] => {

  let ret: any[] = [];
  for (const dta of data) {
    let out: any = {};

    for (const prop of props) {
      const keyFrom: string = prop[1] as string;
      const keyTo = prop[0] as string;
      if (dta[keyFrom]) out[keyTo] = dta[keyFrom];
    }
    // keep original data
    out['data'] = dta;
    ret.push(out);
  }

  return ret;
};

export class dataOp {

  static filterList<T = any>(arr: T[], kw: number | string, fieldname: string = 'id'): T[] {

    return arr.filter((item) => {
      return this.resolveDotPath(item, fieldname) === kw;
    });
  }

  static searchList<T = any>(arr: T[], kw: number | string, fieldname: string = 'id'): T[] {
    
    let reg = new RegExp(`${kw}`, 'i');
    return arr.filter((item) => {
      return this.resolveDotPath(item, fieldname).search(reg)
    });
  }

  static groupBy  (
		dataList: any[],
		groupField: string,
		opt?: { keepUngroupedData: boolean; fieldTitle?: string }
	)  {
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

}




