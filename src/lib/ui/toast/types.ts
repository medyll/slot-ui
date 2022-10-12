import type {SvelteComponentDev} from 'svelte/internal';

export type ToastType = {
  toastId?: any;
  autoClose?:boolean;
  autoCloseDelay?: number
  component?: SvelteComponentDev
  componentProps?: any
}

