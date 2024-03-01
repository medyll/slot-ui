<svelte:options accessors />

<script lang="ts">
	import { chromeFrameStore } from './chromeFrame.store.js';
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import { get_current_component } from 'svelte/internal';
	import Icon from '$lib/base/icon/Icon.svelte';
	import Button from '$lib/base/button/Button.svelte';

	/** common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/** end slotUi exports*/

	/* $: console.log('from chromFrameButtonList',chromeFrameStore);
	$: console.log('from chromFrameButtonList $store',$chromeFrameStore); */
</script>

<div bind:this={element} class="flex-h gap-small {className}">
	{#each [...$chromeFrameStore.values()] as value, key}
		<div class="buttonRail">
			<slot chromeFrame={value}>
				<Button
					style="position:relative"
					on:click={() => {
						chromeFrameStore.toggle(value.frameId);
					}}
					on:dblclick={() => {
						chromeFrameStore.remove(value.frameId);
					}}
					class={value.active ? 'active' : ''}
				>
					{value.title ?? value.frameId}
					<div slot="buttonEnd"><Icon class="theme-text-primary" icon="window-close" /></div>
				</Button>
			</slot>
		</div>
	{/each}
</div>

<style global lang="scss">
	@import '../../styles/slotui-vars.scss';
	@import '../../styles/presets.scss';
	.buttonRail {
		button:not(.active) {
			border: 1px solid transparent;
			background-color: transparent;
		}
		button {
			&.active {
				border: 1px solid var(--slotui-color-border);
			}
			&:hover {
				border: 1px solid var(--slotui-color-primary);
			}
		}
	}
</style>
