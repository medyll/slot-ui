import type { SvelteComponent } from 'svelte';

export type ToastType = {
	toastId?: any;
	autoClose?: boolean;
	autoCloseDelay?: number;
	component?: SvelteComponent;
	componentProps?: any;
};
