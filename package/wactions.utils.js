import Window from '/src/lib/ui/window/Window.svelte';
import { createWindowStore, windowsStore } from './ui/window/windowStore';
import { get, writable } from 'svelte/store';
import Debug from './vendor/debug/Debug.svelte';
const windowList = {}; // Record<string,any>// globalThis.window;
function openWindow(frameId, args = {}) {
    const appW = get(windowsStore).get(frameId);
    windowsStore.open({
        title: frameId,
        defaultPosition: { x: 960, y: 650 },
        component: Debug,
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
export const startMenuStore = writable(false);
function toggleStartMenu(event) {
    if (event)
        event.stopPropagation();
    startMenuStore.set(!get(startMenuStore));
}
export { openWindow, toggleStartMenu };
