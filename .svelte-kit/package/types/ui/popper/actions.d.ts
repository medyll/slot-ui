import Popper from './Popper.svelte';
import type { SvelteComponentDev } from 'svelte/internal';
export declare let popperList: Record<string, Popper>;
declare const openPopper: (popperId: string, args?: {
    position?: 'T' | 'TR' | 'BR' | 'B' | 'BL';
    parentNode?: HTMLElement;
    component?: SvelteComponentDev;
    componentProps?: any;
}) => void;
export { openPopper };
