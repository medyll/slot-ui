import Window from './Window.svelte';
import {wStore} from '$lib/ui/window/store.js';
import {get} from 'svelte/store';


export const openWindow = (frameId: string, args: any = {}) => {
  
  const w = get(wStore).instances[frameId];
  
  if (!w) {
    let a = new Window({
      target: document.body,
      props : {
        title: frameId,
        ...args,
        frameId: frameId,
        removeFromDomOnClose: true
      },
    });
    a.$set({
      self: a
    });
    return a
  } else {
    w.actions.setActive();
    return w
  }
  
};
