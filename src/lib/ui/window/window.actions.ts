import Window from './Window.svelte';
import type { IChromeArgs } from './window.store.js';
import { windowsStore } from './window.store.js';
import { get, writable } from 'svelte/store';
// import Debug from '../base/debug/Debug.svelte';

const windowList: Record<string, any> = {}; // Record<string,any>// globalThis.window;

export const openWindow = (frameId: string, args: Partial<IChromeArgs> = {}) => {

  const appW = get(windowsStore).get(frameId);

  windowsStore.open({
    title: frameId,
    defaultPosition: { x: 960, y: 650 },
    //component: Debug,
    ...args,
    frameId: frameId, // cannot overwrite+
  });

  if (!appW) {
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
  }
}
