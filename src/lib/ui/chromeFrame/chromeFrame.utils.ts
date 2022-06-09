import {derived, get} from 'svelte/store';
import ChromeFrame from './ChromeFrame.svelte';
import {chromeFrameListRef, chromeFrameStore} from './chromeFrame.store';
import type {IChromeArgs} from './types';

export function getChromeFrame(frameId: string | number) {
  
  const {subscribe} = derived([chromeFrameStore], ([$windowsStore]) => {
    
    return $windowsStore.get(frameId);
  });
  
  return {
    subscribe,
    updatePos: (position: IChromeArgs['position']) => chromeFrameStore.updatePos(frameId, position),
    remove   : () => chromeFrameStore.remove(frameId),
    makeOnTop: () => chromeFrameStore.makeOnTop(frameId),
  };
}

/** open a chrome frame in DOM and add it to the store **/
export function openChromeFrame(frameId: string, args: Partial<IChromeArgs> = {}) {

  
  chromeFrameStore.open({
    title          : frameId,
    defaultPosition: {x: 960, y: 650},
    component      : args.component,
    ...args,
    frameId: frameId, // cannot overwrite+
  });
  // makeOnTop
  chromeFrameStore.makeOnTop(frameId);
 
}