import {writable, get, readable, derived} from 'svelte/store';


export type IChromeArgs  = {
  frameId: string | number,
  title?: string,
  open?: boolean,
  minimized?: boolean,
  maximized?: boolean,
  active?: boolean,
  secondaryTitle?: string,
  description?: string,
  onClose?: () => {},
  onCancel?: () => {},
  onValidate?: () => {},
  
  component?: any,
  componentProps?: any
  
  zIndex?: number
  position?: {
    x: number;
    y: number;
  }
  defaultPosition?: {
    x: number;
    y: number;
  }
}

export type WindowStoreListType = Map<string | number, IChromeArgs>
export const windowListObjects = new Map<string | number, IChromeArgs>([]);

const activeFrame = writable<string | number>('');

export function createWindowStore() {
  
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
      return n.set(payload.frameId, { ...obj,...payload, open: true, minimized: false, maximized: true});
    }),
    close    : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload,frameId, open: false});
    }),
    minimize : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload,frameId, minimized: true});
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
      n.set(frameId, {...payload,frameId, position: position});
      return n;
    }),
    makeOnTop: (frameId: string | number) => update((n) => {
      const values  = Array.from(n);
      const payload = n.get(frameId);
      
      const z = values.reduce((prev, val) => {
        // @ts-ignore
        return (val[1]?.zIndex >= prev) ? val[1]?.zIndex + 1 : prev;
      }, 0);
      
      n.set(frameId, {...payload,frameId, zIndex: z});
      return n;
    }),
    reset    : () => set(new Map([]))
  };
}


export const windowsStore = createWindowStore();

export function getAppWindowStore(frameId: string | number) {
  
  const {subscribe} = derived([windowsStore], ([$windowsStore]) => {
    
    return $windowsStore.get(frameId);
  });
  
  return {
    subscribe,
    updatePos: (position: IChromeArgs['position']) => windowsStore.updatePos(frameId, position),
    remove   : () => windowsStore.remove(frameId),
    makeOnTop: () => windowsStore.makeOnTop(frameId),
  };
}