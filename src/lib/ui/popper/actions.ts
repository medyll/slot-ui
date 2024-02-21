import type { PopperPositionType } from '$lib/ui/popper/types.js';
import Popper from '$lib/ui/popper/Popper.svelte';
import type { SvelteComponentDev } from 'svelte/internal';

export let popperList: Record<string, Popper> = {};

const openPopper = (
	popperId: string,
	args: {
		position?: PopperPositionType;
		parentNode?: HTMLElement;
		component?: SvelteComponentDev;
		componentProps?: any;
	} = {}
) => {
	if (popperList[popperId]) {
		s;
		if (popperList[popperId].toggle) {
			popperList[popperId].toggle();
		} else {
			createPopper();
		}
	} else {
		createPopper();
	}

	function createPopper() {
		popperList[popperId] = new Popper({
			target: document.body,
			intro: true,
			props: {
				code: popperId,
				...args
			}
		});

		popperList[popperId].$$.on_destroy.push(() => {
			delete popperList[popperId];
		});
	}
};

export { openPopper };
