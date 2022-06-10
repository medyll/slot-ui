import type { SvelteComponent } from 'svelte';
export declare function createEventForwarder(component: SvelteComponent, exclude?: string[]): (node: HTMLElement | SVGElement) => {
    destroy: () => void;
};
