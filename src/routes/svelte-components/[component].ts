

export async function get({params}){
 
    return {
        headers:{
            Accept:'application/json',
        },
        status:200,
        body: {...params,from: '[component]'}
    }
}
