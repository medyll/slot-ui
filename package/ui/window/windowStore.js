import { writable, get, readable, derived } from 'svelte/store';
export const windowListObjects = new Map([]);
const activeFrame = writable('');
export function createWindowStore() {
    const { subscribe, set, update } = writable(windowListObjects);
    let activatedFrame;
    activeFrame.subscribe((value) => {
        activatedFrame = value;
    });
    return {
        subscribe,
        activeFrame,
        create: (payload) => update((n) => n.set(payload.frameId, { ...payload })),
        open: (payload) => update((n) => {
            activeFrame.set(payload.frameId);
            const obj = n.get(payload.frameId) ?? {};
            console.log({ ...obj, ...payload, open: true, minimized: false, maximized: true });
            return n.set(payload.frameId, { ...obj, ...payload, open: true, minimized: false, maximized: true });
        }),
        close: (frameId) => update((n) => {
            const payload = n.get(frameId);
            return n.set(frameId, { ...payload, frameId, open: false });
        }),
        minimize: (frameId) => update((n) => {
            const payload = n.get(frameId);
            return n.set(frameId, { ...payload, frameId, minimized: true });
        }),
        toggle: (frameId) => update((n) => {
            const payload = n.get(frameId);
            return n.set(frameId, { ...payload, frameId, minimized: !payload?.minimized });
        }),
        remove: (frameId) => update((n) => {
            n.delete(frameId);
            return n;
        }),
        updatePos: (frameId, position) => update((n) => {
            const payload = n.get(frameId);
            n.set(frameId, { ...payload, frameId, position: position });
            return n;
        }),
        makeOnTop: (frameId) => update((n) => {
            const values = Array.from(n);
            const payload = n.get(frameId);
            const z = values.reduce((prev, val) => {
                // @ts-ignore
                return (val[1]?.zIndex >= prev) ? val[1]?.zIndex + 1 : prev;
            }, 0);
            n.set(frameId, { ...payload, frameId, zIndex: z });
            return n;
        }),
        reset: () => set(new Map([]))
    };
}
export const windowsStore = createWindowStore();
export function getAppWindowStore(frameId) {
    const { subscribe } = derived([windowsStore], ([$windowsStore]) => {
        return $windowsStore.get(frameId);
    });
    return {
        subscribe,
        updatePos: (position) => windowsStore.updatePos(frameId, position),
        remove: () => windowsStore.remove(frameId),
        makeOnTop: () => windowsStore.makeOnTop(frameId),
    };
}
