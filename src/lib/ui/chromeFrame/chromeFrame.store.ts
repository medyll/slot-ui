import {writable} from 'svelte/store';
import type {IChromeArgs} from './types';


export type WindowStoreListType = Map<string | number, IChromeArgs>
export const windowListObjects = new Map<string | number, IChromeArgs>([]);

const activeFrame = writable<string | number>('');

function createChromeFrameStore() {
  
  const {subscribe, set, update} = writable<WindowStoreListType>(windowListObjects);
  
  let activatedFrame;
  
  activeFrame.subscribe((value: string | number) => {
    activatedFrame = value;
  });
  
  return {
    subscribe,
    activeFrame,
    create   : (payload: IChromeArgs) => update((n) => n.set(payload.frameId, {...payload})),
    open     : (payload: IChromeArgs) => update((n) => {
      activeFrame.set(payload.frameId);
      const obj = n.get(payload.frameId) ?? {};
      // console.log({ ...obj,...payload, open: true, minimized: false, maximized: true})
      // we should open
      return n.set(payload.frameId, {...obj, ...payload, open: true, minimized: false, maximized: true});
    }),
    close    : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, frameId, open: false});
    }),
    minimize : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, frameId, minimized: true});
    }),
    toggle   : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, frameId, minimized: !payload?.minimized});
    }),
    remove   : (frameId: string | number) => update((n) => {
      
      n.delete(frameId);
      return n;
    }),
    updatePos: (frameId: string | number, position: IChromeArgs['position']) => update((n) => {
      const payload = n.get(frameId);
      n.set(frameId, {...payload, frameId, position: position});
      return n;
    }),
    makeOnTop: (frameId: string | number) => update((n) => {
      const values  = Array.from(n);
      const payload = n.get(frameId);
      
      const z = values.reduce((prev, val) => {
        // @ts-ignore
        return (val[1]?.zIndex >= prev) ? val[1]?.zIndex + 1 : prev;
      }, 0);
      n.forEach((frame,frameKey)=>{
        n.set(frameKey, {...frame,  active: false});
      })
      n.set(frameId, {...payload, frameId, zIndex: z, active: true});
      return n;
    }),
    reset    : () => set(new Map([]))
  };
}


export const chromeFrameStore = createChromeFrameStore();

export const chromeFrameListRef: Record<string, any> = {};