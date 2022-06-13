import type { PopperPositionType } from './types';
import Popper from './Popper.svelte';
import type { SvelteComponentDev } from 'svelte/internal';
export declare let popperList: Record<string, Popper>;
declare const openPopper: (popperId: string, args?: {
    position?: PopperPositionType;
    parentNode?: HTMLElement;
    component?: SvelteComponentDev;
    componentProps?: any;
}) => void;
export { openPopper };
