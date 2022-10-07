import Window from '/src/lib/ui/window/Window.svelte';
import type {IChromeArgs} from '../ui/window/store.js';
import {windowsStore} from '../ui/window/store.js';
import {get, writable} from 'svelte/store';
import Debug from '../base/debug/Debug.svelte';

const windowList: Record<string, any> = {}; // Record<string,any>// globalThis.window;

function openWindow(frameId: string, args: Partial<IChromeArgs> = {}) {
  
  const appW = get(windowsStore).get(frameId);
  
  windowsStore.open({
    title          : frameId,
    defaultPosition: {x: 960, y: 650},
    component      : Debug,
    ...args,
    frameId: frameId, // cannot overwrite+
  });
  
  if (!appW) {
    windowList[frameId] = new Window({
      target: document.body,
      props : {
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

export const startMenuStore = writable<boolean>(true);

function toggleStartMenu(event: PointerEvent) {
  if (event) event.stopPropagation();
  startMenuStore.set(!get(startMenuStore));
}

type openFrameOptionsType = {
  parent: string | HTMLElement
}

function openFrame(frameId: string, options: openFrameOptionsType) {
  //
  const {parent = "body"} = options;
  // check if FrameId in store
  
}

export {openWindow, toggleStartMenu};