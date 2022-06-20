export const propsProxy = (props, data) => {
    let ret = [];
    for (const dta of data) {
        let out = {};
        for (const prop of props) {
            const keyFrom = prop[1];
            const keyTo = prop[0];
            if (dta[keyFrom])
                out[keyTo] = dta[keyFrom];
        }
        // keep original data
        out['data'] = dta;
        ret.push(out);
    }
    return ret;
};
export class dataOp {
    static filterList(arr, kw, fieldname = 'id') {
        return arr?.filter((item) => {
            return this.resolveDotPath(item, fieldname) === kw;
        });
    }
    static filterListFirst(arr, kw, fieldname = 'id') {
        return this.filterList(arr, kw, fieldname)?.[0];
    }
    static searchList(arr, kw, fieldname = 'id') {
        let reg = new RegExp(`${kw}`, 'i');
        return arr.filter((item) => {
            return this.resolveDotPath(item, fieldname).search(reg);
        });
    }
    static groupBy(dataList, groupField, opt) {
        const out = [];
        return dataList.reduce((result, currentValue) => {
            const key = opt?.keepUngroupedData
                ? currentValue[groupField] ?? 'ungrouped'
                : currentValue[groupField];
            (result[key] = result[key] || []).push(currentValue);
            return result;
        }, {});
    }
    ;
    static resolveDotPath(object, path, defaultValue) {
        return path.split('.').reduce((r, s) => (r ? r[s] : defaultValue), object);
    }
}
