import { slotuiCatalog } from "$lib/slotuiCatalog.js";


const fetchIt = async ()=> new Promise((resolve,reject)=>{resolve(slotuiCatalog)})
/** @type {import('./$types').LayoutServerLoad} */
export const load = () => {
  return {
    slotuiCatalog,
    streamed: {
      slotuiCatalog: fetchIt()
    },
  };
};
