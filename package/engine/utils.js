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
