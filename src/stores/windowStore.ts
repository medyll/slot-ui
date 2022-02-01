import {writable, get, readable, derived} from 'svelte/store';


export type IChromeArgs<T = Record<string, any>> = {
  frameId: string | number,
  open?: boolean,
  minimized?: boolean,
  maximized?: boolean,
  active?: boolean,
  title?: string,
  secondaryTitle?: string,
  description?: string,
  onClose?: () => void,
  onCancel?: () => void,
  onValidate?: () => void,
  component?: any,
  componentProps?: T
  zIndex?: number
  position?: {
    x: number;
    y: number;
  }
}

export type WindowStoreListType = Map<string | number, IChromeArgs>
export const windowListObjects = new Map<string | number, IChromeArgs>([]);

const activeFrame = writable<string | number>(null);

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
      return n.set(payload.frameId, {...payload, open: true, minimized: false, maximized: true});
    }),
    close    : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, open: false});
    }),
    minimize : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, minimized: true});
    }),
    toggle   : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, minimized: !payload.minimized});
    }),
    remove   : (frameId: string | number) => update((n) => {
      n.delete(frameId);
      return n;
    }),
    updatePos: (frameId: string | number, position: IChromeArgs['position']) => update((n) => {
      const payload = n.get(frameId);
      n.set(frameId, {...payload, position: position});
      return n;
    }),
    reset    : () => set(new Map([]))
  };
}


export const windowsStore = createWindowStore();

export function getAppWindowStore(frameId: string | number) {
  
  const {subscribe} = derived([windowsStore, activeFrame], ([$windowsStore, $activeFrame]) => {
    const size   = $windowsStore.size;
    const act    = $windowsStore.get(frameId);
    const zIndex = ($activeFrame === frameId) ? size + 1 : act?.zIndex;
    return {
      ...act,
      active: $activeFrame === frameId,
      zIndex
    };
  });
  
  return {
    subscribe,
    updatePos: (position: IChromeArgs['position']) => windowsStore.updatePos(frameId, position),
    remove   : () => windowsStore.remove(frameId)
  };
}