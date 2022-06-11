import {writable} from 'svelte/store';
import type {IChromeArgs, IChromeOptionsArgs} from './types';
import {tick} from 'svelte';


export type WindowStoreListType = Map<string | number, IChromeArgs>
export const windowListObjects = new Map<string | number, IChromeArgs>([]);

const activeFrame            = writable<string | number>('');
const chromeFrameConfigStore = writable<IChromeOptionsArgs>({showCommandBar: true});
const chromeFrameListStore   = writable<WindowStoreListType>(windowListObjects);

/*chromeFrameConfigStore.set()
 $chromeFrameConfigStore.onClose = ()=>{}*/

function createChromeFrameStore() {
  
  const {subscribe, set, update} = chromeFrameListStore;
  
  let currentStore: Map<string | number, IChromeArgs> = new Map([]);
  
  chromeFrameListStore.subscribe((value: any) => {
    currentStore = value;
  });
  
  let currentConf = {};
  chromeFrameConfigStore.subscribe((conf) => {
    currentConf = conf;
  });
  
  // active means on top too
  // set as active, inactivate others
  async function setActive(frameId: string | number) {
    const currentChromeFrame = currentStore.get(frameId);
    if (currentChromeFrame) {
      currentStore.forEach((frame, frameKey) => {
        currentStore.set(frameKey, {...frame, active: false});
      });
      await tick();
      //
      const values = Array.from(currentStore);
      const zIndex = values.reduce((prev, val) => {
        // @ts-ignore
        return (val[1]?.zIndex >= prev) ? val[1]?.zIndex + values.length : prev;
      }, 0);
     
      currentStore.set(frameId, {...currentChromeFrame, zIndex, active: true, minimized: true});
      activeFrame.set(frameId);
    }
  }
  
  return {
    subscribe,
    activeFrame,
    defaultConfigStore: chromeFrameConfigStore,
    create            : (payload: IChromeArgs) => update((n) => {
      setActive(payload.frameId);
      // test global conf
      return n.set(payload.frameId, {...currentConf, ...payload});
    }),
    open              : (payload: IChromeArgs) => update((n) => {
      if (!payload.frameId) return n;
      
      activeFrame.set(payload.frameId);
      setActive(payload.frameId);
      
      const obj = n.get(payload.frameId) ?? {};
      
      // global injection
      return n.set(payload.frameId, {...obj, ...currentConf, ...payload, open: true, maximized: true, minimized: false,});
    }),
    close             : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      // execute onClose parameter
      if (payload && payload.onClose) {payload.onClose(payload);}
      return n.set(frameId, {...payload, frameId, open: false});
    }),
    minimize          : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      
      return n.set(frameId, {...payload, frameId, minimized: true});
    }),
    toggle            : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      // set as active, if visible
      if (!payload?.minimized) setActive(frameId);
      return n.set(frameId, {...payload, frameId, minimized: !payload?.minimized});
    }),
    remove            : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      // execute onClose parameter
      if (payload && payload.onClose) {payload.onClose(payload);}
      n.delete(frameId);
      return n;
    }),
    updatePos         : (frameId: string | number, position: IChromeArgs['position']) => update((n) => {
      const payload = n.get(frameId);
      n.set(frameId, {...payload, frameId, position: position});
      return n;
    }),
    makeOnTop         : (frameId: string | number) => update((n) => {
      const values  = Array.from(n);
      const payload = n.get(frameId);
      
      const z = values.reduce((prev, val) => {
        // @ts-ignore
        return (val[1]?.zIndex >= prev) ? val[1]?.zIndex + 1 : prev;
      }, 0);
      // set as active, inactivate others
      setActive(frameId);
      /*n.forEach((frame, frameKey) => {
       n.set(frameKey, {...frame, active: false});
       });*/
      n.set(frameId, {...payload, frameId, zIndex: z, active: true});
      return n;
    }),
    reset             : () => set(new Map([]))
  };
}


export const chromeFrameStore = createChromeFrameStore();

export const chromeFrameListRef: Record<string, any> = {};