import Window from './Window.svelte';
import type { IChromeArgs } from './store.js';
import { windowsStore } from '$lib/ui/window/store.js';
import { get, writable } from 'svelte/store';
// import Debug from '../base/debug/Debug.svelte';

const windowList: Record<string, any> = {}; // Record<string,any>// globalThis.window;

export const openWindow = (frameId: string, args: Partial<IChromeArgs> = {}) => {

  const appW = get(windowsStore).get(frameId);

  console.log(appW)
  /* windowsStore.open({
    title: frameId,
    defaultPosition: { x: 0, y: 0 },
    ...args,
    frameId: frameId, 
  }); */


  if (!appW) {


    get(windowsStore).set(frameId,{ 
      ...args,
      frameId: frameId, 
    })

    /* windowsStore.create({ 
      ...args,
      frameId: frameId, 
    }); */

    windowList[frameId] = new Window({
      target: document.body,
      props: {
        title: frameId,
        ...args,
        frameId: frameId
      },
    });

console.log(windowList[frameId])

    windowList[frameId].$set({
      self: windowList[frameId]
    });

    return windowList[frameId];
  }
}
