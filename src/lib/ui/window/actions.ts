import Window from './Window.svelte';
import type { IChromeArgs } from './store.js';
import { windowsStore } from '$lib/ui/window/store.js';
import { get, writable } from 'svelte/store';

const windowList: Record<string, any> = {}; // Record<string,any>// globalThis.window;

export const openWindow = (frameId: string, args: Partial<IChromeArgs> = {}) => {

  const appW = get(windowsStore).get(frameId);

  if (!appW) {
    
    get(windowsStore).set(frameId,{ 
      ...args,
      frameId: frameId, 
    })

    windowList[frameId] = new Window({
      target: document.body,
      props: {
        title: frameId,
        ...args,
        frameId: frameId
      },
    });

    windowList[frameId].$set({
      self: windowList[frameId]
    });

    return windowList[frameId];
  }
}
