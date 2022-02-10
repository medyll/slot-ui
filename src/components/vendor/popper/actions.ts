import Popper from './Popper.svelte';
import type {SvelteComponentDev} from 'svelte/internal';

let singletonPoppers: Record<string, Popper> = {};

const openPopper = (popperId: string, args: {
  position?: 'T' | 'TR' | 'BR' | 'B' | 'BL',
  parentNode?: HTMLElement,
  component?: SvelteComponentDev,
  componentProps?: any
} = {}) => {
  
  console.log(args)
  
  if (singletonPoppers[popperId]) {
    console.log(singletonPoppers[popperId])
    singletonPoppers[popperId].toggle();
    // resend props if changed
  } else {
    createPopper()
  }
  
  function createPopper(){
    singletonPoppers[popperId] = new Popper({
      target: document.body,//document.querySelector('#svelte'),
      props : {
        code: popperId,
        ...args,
      },
    });
  }
  console.log({singletonPoppers});
};

export {openPopper};