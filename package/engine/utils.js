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
    /** sorting  */
    static sortBy(arr, by, sortDir = 'asc') {
        const sortD = (sortDir === 'asc') ? 1 : -1;
        return [...arr].sort((a, b) => {
            return this.resolveDotPath(a, by) > this.resolveDotPath(b, by) ? sortD : this.resolveDotPath(b, by) > this.resolveDotPath(a, by) ? -sortD : 0;
        });
    }
    /** search an object in an array */
    static filterList(arr, kw, fieldname = 'id') {
        return arr?.filter((item) => {
            return this.resolveDotPath(item, fieldname) === kw;
        });
    }
    /** resolve first founded object in array */
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
    /** @deprecated */
    static getObjectItemById(arr, id, idname) {
        const idcode = idname ?? 'id';
        // getValueFromNotation()
        return arr.filter((item) => {
            // console.log(idcode , ' : ',resolveDotPath(item,idcode))
            //return item[idcode] === id
            return this.resolveDotPath(item, idcode) === id;
        });
    }
}
