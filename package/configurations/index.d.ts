import type { IChromeArgs } from '../stores/windowStore';
declare function openWindow(frameId: string, args?: Partial<IChromeArgs>): void;
export declare const startMenuStore: import("svelte/store").Writable<boolean>;
declare function toggleStartMenu(event: PointerEvent): void;
export { openWindow, toggleStartMenu };
