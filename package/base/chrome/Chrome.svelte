<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import ChromeNav from './ChromeNav.svelte';
	import ChromeContent from './ChromeContent.svelte';
	import {createEventForwarder} from '../../engine/engine';
	import {get_current_component} from 'svelte/internal';

	/*  common slotUi exports*/
	let className: string = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents                       = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	let store = writable<typeof opt>({});
	export const opt = {
		store,
		actions: {
			togglePanel
		}
	};

	setContext('store', opt);

	function togglePanel() {
		$store.store;
	}
</script>

<div use:forwardEvents bind:this={element} class={className}>
	<ChromeNav />
	<ChromeContent />
</div>
