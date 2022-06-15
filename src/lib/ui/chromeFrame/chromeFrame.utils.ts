import {derived, get} from 'svelte/store';
import ChromeFrame from './ChromeFrame.svelte';
import {chromeFrameListRef, chromeFrameStore} from './chromeFrame.store';
import type {IChromeFrameArgs} from './types';

export function getChromeFrame(frameId: string | number) {
  
  const {subscribe} = derived([chromeFrameStore], ([$windowsStore]) => {
    
    return $windowsStore.get(frameId);
  });
  
  return {
    subscribe,
    updatePos: (position: IChromeFrameArgs['position']) => chromeFrameStore.updatePos(frameId, position),
    remove   : () => chromeFrameStore.remove(frameId),
    makeOnTop: () => chromeFrameStore.makeOnTop(frameId),
    minimize: () => chromeFrameStore.minimize(frameId),
    toggle: () => chromeFrameStore.toggle(frameId),
  };
}

/** open a chrome frame in DOM and add it to the store **/
export function openChromeFrame(frameId: string, args: Partial<IChromeFrameArgs> = {}) {

  
  chromeFrameStore.open({
    title          : frameId,
    defaultPosition: {x: 960, y: 650},
    component      : args.component,
    ...args,
    frameId: frameId, // cannot overwrite+
  });
 
}

export function removeChromeFrame(frameId: string, args: Partial<IChromeFrameArgs> = {}) {

  
  chromeFrameStore.remove (frameId);
 
}
