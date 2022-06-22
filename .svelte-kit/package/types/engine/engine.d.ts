import type { SvelteComponent } from 'svelte';
/** @deprecated */
export declare function createEventForwarder(component: SvelteComponent, exclude?: string[]): (node: HTMLElement | SVGElement) => {
    destroy: () => void;
};
