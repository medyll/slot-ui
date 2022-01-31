import {writable,get,readable} from 'svelte/store';


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
}

export type listW = Map<string | number, IChromeArgs>
export const windowListObjects = new Map<string | number, IChromeArgs>([]);

export function useWindowList() {
  
  const {subscribe, set, update} = writable<listW>(windowListObjects);
  
  return {
    subscribe,
    create  : (payload: IChromeArgs) => update((n) => n.set(payload.frameId, payload)),
    open    : (payload: IChromeArgs) => update((n) => {
      return n.set(payload.frameId, {open: true, minimized: false, maximized: true, ...payload});
    }),
    close   : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {open: true, minimized: false, maximized: true, ...payload});
    }),
    minimize: (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, minimized: true});
    }),
    toggle  : (frameId: string | number) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, {...payload, minimized: !payload.minimized});
    }),
    remove  : (frameId: string | number) => update((n) => {
      n.delete(frameId);
      return n;
    }),
  };
}

export const windowList = useWindowList();
