

export async function get({params}){

    console.log({params},'gyu')
    return {
        headers:{
            Accept:'application/json',
        },
        status:200,
        body: {...params,from:'here'}
    }
}
