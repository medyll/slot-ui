


export function defaultsArgs(parametersProps: Record<string,any>):any{
    const out: Record<string,any> = {};
    for(const prop of Object.keys(parametersProps)){
        console.log(prop,parametersProps[prop]?.values?.[0])
        out[prop]=parametersProps[prop]?.values?.[0];
    }
    
    return out
}
export function defaultsArgsFromProps(prop:string,parametersProps: Record<string,any>):any{
    return parametersProps[prop]?.values?.[0]
}
