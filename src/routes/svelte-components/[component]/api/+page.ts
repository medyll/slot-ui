
/** @type {import('./$types').PageLoad} */
export async function load({params}){
    console.log({params})
    return {component:params.component}
}
