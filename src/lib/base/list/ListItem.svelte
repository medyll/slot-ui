<svelte:options accessors={true} />

<script lang="ts">
	import { getContext } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import {
		createEventDispatcher,
		custom_event,
		get_current_component,
		null_to_empty
	} from 'svelte/internal';
	import type { ElementProps } from './types';
	import { createEventForwarder } from '../../engine/engine';
	import Icon from '../icon/Icon.svelte';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement;
	export let style: string = '';
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export let icon: string | null = null;
	export let primary: string | null = null;
	export let secondary: string | null = null;
	export let action: string | null = null;
	export let selected: boolean;
	export let showIcon: boolean = true;
	export let transition: __sveltets_2_SvelteTransitionReturnType | undefined = undefined;

	export let disabled: boolean = false;
	// data to hold
	export let data: Record<string, any> = {};

	export let density: ElementProps['density'] = 'default';

	let listStateContext = getContext<any>('listStateContext');

	const handleClick = () => () => {
		// send whole listItem 
		/** @deprecated */
		const eventDeprecated = custom_event('listclicked', data, { bubbles: true });
		element.dispatchEvent(eventDeprecated);

		const event = custom_event('listitem:clicked', {...$$props}, { bubbles: true });
		element.dispatchEvent(event);
	};

	const handleDblClick = () => () => {
		// send whole listItem
		/** @deprecated */
		const eventDeprecated = custom_event('list:dblclicked', data, { bubbles: true });
		element.dispatchEvent(eventDeprecated);
		
		const event = custom_event('listitem:dblclicked', {...$$props}, { bubbles: true });
		element.dispatchEvent(event);
	};

	function doTransition() {
		return transition;
	}

	let isActive: boolean = false;
	$: if ($listStateContext?.selectorField) {
		isActive = listStateContext.selector($listStateContext.selectorField, data);
	}
</script>

<li
	bind:this={element}
	class="listItem density-{density} {className}"
	class:isActive
	on:click={handleClick()}
	on:dblclick={handleDblClick()}
	style="opacity:${disabled ? 0.6 : 1};${style}"
>
	<span class="listItemChip" />
	{#if $$slots.icon || icon}
		<div class="listItemIcon">
			<slot name="icon">
				{#if icon}<div><Icon {icon} /></div>{/if}
			</slot>
		</div>
	{/if}
	<div class="listItemContent" title={secondary}>
		<div>
			<slot name="primary">
				{null_to_empty(primary)}
			</slot>
		</div>
		<div class="itemSecondary">
			<slot name="secondary">
				{null_to_empty(secondary)}
			</slot>
		</div>
	</div>
	<div class="listItemAction">
		<slot name="action">
			{null_to_empty(action)}
		</slot>
	</div>
</li>

<style lang="scss" global>
	@import 'List';

	/* li:focus{
		outline:1px solid #ccc;
		outline-offset: -1px;
	} */
	.listItem.density-tight {
		padding: 0.5rem 0;
		margin: 0.125rem 0;
	}

	.listItem.density-default {
		padding: 1rem 0;
		margin: 0.25rem 0;
	}

	.listItem.density-kind {
		padding: 1.5rem 0;
		margin: 0.5rem 0;
	}
</style>
