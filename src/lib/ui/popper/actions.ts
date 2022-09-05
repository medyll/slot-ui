import type { PopperPositionType } from './types';
import Popper from './Popper.svelte';
import type { SvelteComponentDev } from 'svelte/internal';

export let popperList: Record<string, Popper> = {};

const openPopper = (popperId: string, args: {
  position?: PopperPositionType,
  parentNode?: HTMLElement,
  component?: SvelteComponentDev,
  componentProps?: any
} = {}) => {


 
  if (popperList[popperId]) {
    if (popperList[popperId].toggle) {
      popperList[popperId].toggle();
    } else {
      createPopper()
    }
  } else {
    createPopper()
  }

  function createPopper() {
 
    popperList[popperId] = new Popper({
      target: document.body,
      intro: true,
      props: {
        code: popperId,
        ...args,
      },
    });

    popperList[popperId].$$.on_destroy.push(() => {
      delete (popperList[popperId])
    })

  }
};

export { openPopper };
