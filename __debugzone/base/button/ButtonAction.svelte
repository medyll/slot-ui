<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';

	import Icon from '../icon/Icon.svelte';
	import { openPopper } from '../../ui/popper/actions';
	import {createEventForwarder} from '../../engine/engine';
	import {get_current_component} from 'svelte/internal';

	/*  common slotUi exports*/
	let className = '';
	export {className as class};
	export let element: HTMLButtonElement | null = null;
	const forwardEvents                          = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let icon: string = 'faList';
	export let actionComponent: SvelteComponentDev;
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

<div bind:this={element}  use:forwardEvents class="buttonWrapper" on:click>
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
