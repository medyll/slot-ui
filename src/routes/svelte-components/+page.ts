import type { PageLoad } from './$types';
export async function load({params:PageLoad}){
 
    return {
        headers:{
            Accept:'application/json',
        },
        status:200,
        body: {...params,from: '[component]'}
    }
}
