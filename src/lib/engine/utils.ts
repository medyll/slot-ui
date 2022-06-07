
export type PropsProxyProps<T = any, B = any> = [string: keyof T, string: keyof B][]

export const propsProxy = <T = any, B = any, C = any>(props: PropsProxyProps<T, B>, data: any[]): Record<keyof B, any>[] => {
  
  let ret: any[] = [];
  for (const dta of data) {
    let out: any = {};
    
    for (const prop of props) {
      const keyFrom: string = prop[1] as string;
      const keyTo           = prop[0] as string;
      if (dta[keyFrom]) out[keyTo] = dta[keyFrom];
    }
    // keep original data
    out['data'] = dta;
    ret.push(out);
  }
  
  return ret;
};