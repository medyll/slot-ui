import Popper from './Popper.svelte';
import type {SvelteComponentDev} from 'svelte/internal';

let singletonPoppers: Record<string, Popper> = {};

const openPopper = (popperId: string, args: {
  position?: 'T' | 'TR' | 'BR' | 'B' | 'BL',
  parent?: HTMLElement,
  component?: SvelteComponentDev,
  componentProps?: any
} = {}) => {
  
  console.log(args?.parent?.getBoundingClientRect())
  
  if (singletonPoppers[popperId]) {
    console.log(singletonPoppers[popperId])
    singletonPoppers[popperId].toggle();
  } else {
    createPopper()
  }
  
  function createPopper(){
    singletonPoppers[popperId] = new Popper({
      target: args.parent ?? document.querySelector('#svelte'),
      props : {
        code: popperId,
        ...args,
      },
    });
  }
  console.log({singletonPoppers});
};

export {openPopper};