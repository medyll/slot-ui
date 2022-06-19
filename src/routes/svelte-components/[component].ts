

export async function get({params}){

    console.log({params},'comp')
    return {
        headers:{
            Accept:'application/json',
        },
        status:200,
        body: {...params,from: '[component]'}
    }
}
