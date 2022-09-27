export const propsProxy = (props, data) => {
    let ret = [];
    for (const dta of data) {
        let out = {};
        for (const prop of props) {
            const keyListItem = prop[0];
            const keyData = prop[1];
            out[keyListItem] = (typeof keyData === 'function') ? keyData(dta) : dta[keyData];
        }
        // keep original data
        out['data'] = dta;
        ret.push(out);
    }
    return ret;
};
/** data manipulation class */
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
            if (fieldname && fieldname !== '*')
                return this.resolveDotPath(item, fieldname) === kw;
            if (!fieldname || fieldname === '*')
                return Object.keys(item).some((key) => {
                    return ['string', 'number'].includes(typeof item?.[key]) ? item[key] == kw : false;
                });
        });
    }
    /** resolve first founded object in array */
    static filterListFirst(arr, kw, fieldname = 'id') {
        return this.filterList(arr, kw, fieldname)?.[0];
    }
    static searchList(arr, kw, fieldname) {
        let reg = new RegExp(`${kw}`, 'i');
        return arr.filter((item) => {
            if (fieldname !== '*')
                return this.resolveDotPath(item, fieldname).toString().search(reg) === -1 ? false : true;
            if (fieldname === '*')
                return Object.keys(item).some((key) => {
                    if (typeof item?.[key] === 'object' && !Array.isArray(item?.[key])) {
                        return false;
                    }
                    return ['string', 'number'].includes(typeof item?.[key]) ? `${item?.[key]}`.search(reg) !== -1 : false;
                });
        });
    }
    static groupBy(dataList, groupField, opt) {
        const groupKey = typeof groupField === 'string' ? [groupField] : groupField;
        return dataList.reduce((result, currentValue) => {
            if (typeof dataOp.resolveDotPath(currentValue, groupField) === "undefined") {
                const rootField = groupField.split('.')[0];
                const restField = groupField.split('.').slice(1).join('.');
                // check type of root, to be able to traverse arrays
                switch (typeof currentValue[rootField]) {
                    case "object":
                        if (Array.isArray(currentValue[rootField])) {
                            for (const red of currentValue[rootField]) {
                                const arrKey = opt?.keepUngroupedData
                                    ? dataOp.resolveDotPath(red, restField) ?? '- ungrouped'
                                    : dataOp.resolveDotPath(red, restField);
                                if (arrKey)
                                    (result[arrKey] = result[arrKey] || []).push(currentValue);
                            }
                        }
                        break;
                }
            }
            const key = opt?.keepUngroupedData
                ? dataOp.resolveDotPath(currentValue, groupField) ?? '- ungrouped'
                : dataOp.resolveDotPath(currentValue, groupField);
            const tmpKey = groupKey.map(key => dataOp.resolveDotPath(currentValue, key, undefined)).join(' ');
            if (key !== undefined)
                (result[key] = result[key] || []).push(currentValue);
            return result;
        }, {});
    }
    ;
    static resolveDotPath(object, path, defaultValue) {
        return path.split('.').reduce((r, s) => (r ? r[s] : defaultValue), object) ?? undefined;
    }
    /**
     *
     * @param arr array to find in
     * @param value value to seek for
     * @param key  object key to match with
     * @returns number
     */
    static findObjectIndex(arr, value, key = 'id') {
        return arr.findIndex((obj) => {
            return this.resolveDotPath(obj, key) === value;
        });
    }
}
