import Window from '/src/components/ui/window/window.svelte';
import {createWindowStore, windowsStore} from '../stores/windowStore';
import {get, writable} from 'svelte/store';


const windowList = globalThis.window;

function openWindow(frameId: string, args: any = {}) {
  
  const appW = get(windowsStore).get(frameId);
  windowsStore.open({
    title: frameId,
    ...args,
    frameId: frameId,
  });
  
  if (!appW) {
    windowList[frameId] = new Window({
      target: document.querySelector('#svelte'),
      props : {
        title: frameId,
        ...args,
        frameId: frameId,
      },
    });
    
    windowList[frameId].$set({
      self: windowList[frameId]
    });
  }
}

export const startMenuStore =  writable<boolean>(true);

function toggleStartMenu(event:PointerEvent){
  if(event) event.stopPropagation();
  // console.log('red',get(startMenuStore))
  startMenuStore.set(!get(startMenuStore))
}

export {openWindow,toggleStartMenu};