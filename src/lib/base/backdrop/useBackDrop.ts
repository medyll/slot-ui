import type { SvelteComponentDev } from "svelte/internal"


export type UseBackDropProps = { 
    component?: SvelteComponentDev | any
    componentProps?: {} 
    parentNode?: HTMLElement | any 
}

export const backdrop = (node: HTMLElement,props?:UseBackDropProps)=>{

}