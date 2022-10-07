import { get, writable } from "svelte/store";

export const starterStore = writable<boolean>(true);

function toggleStarter(event: PointerEvent) {
  if (event) event.stopPropagation();
  starterStore.set(!get(starterStore));
}

type openFrameOptionsType = {
  parent: string | HTMLElement
} 

export {toggleStarter};