<script lang="ts">
	/** @restProps { button} */
	import Icon from '$lib/base/icon/Icon.svelte';
	import type { CommonProps } from '$lib/types/index.js';
	import { openPopper } from '$lib/ui/popper/actions.js';

	type Props = CommonProps & {
		icon?: string;
		element?: HTMLButtonElement;
		actionComponent?: any;
		actionComponentProps?: any;
	};

	let {
		icon: iconProp,
		element,
		class: className = '',
		actionComponent,
		actionComponentProps,
		...restProps
	} = $props<Props>();

	const onActionClick = (event: PointerEvent) => {
		event.stopPropagation();
		openPopper('settingActions', {
			parentNode: element,
			component: actionComponent,
			componentProps: actionComponentProps ?? {}
		});
	};
</script>

<button on:click bind:this={element}>
	<Icon fontSize="small" icon="faList" />
	{#if actionComponent}
		<span role="button" class="action" on:click={onActionClick}>
			<Icon icon="chevron-right" fontSize="tiny" />
		</span>
	{/if}
</button>

<style lang="scss">
	@import 'ButtonAction';
</style>
