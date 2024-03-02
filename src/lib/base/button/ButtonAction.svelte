<script lang="ts">
	import Icon from '$lib/base/icon/Icon.svelte';
	import { openPopper } from '$lib/ui/popper/actions.js';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLButtonElement | null = null;
	/*  end slotUi exports*/

	export let icon: string = 'faList';
	export let actionComponent: any;
	export let actionComponentProps: any;

	let buttonRef;

	const onActionClick = (event: PointerEvent) => {
		event.stopPropagation();
		openPopper('settingActions', {
			parentNode: buttonRef,
			component: actionComponent,
			componentProps: actionComponentProps ?? {}
		});
	};
</script>

<div bind:this={element} class="buttonWrapper" on:click>
	<button bind:this={buttonRef}>
		<Icon fontSize="small" icon="faList" />
		{#if actionComponent}
			<span class="action" on:click={onActionClick}>
				<Icon icon="chevron-right" fontSize="tiny" />
			</span>
		{/if}
	</button>
	{#if $$slots.default}
		<div class="pad-tb-1 text-center">
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	@import 'ButtonAction';
</style>
