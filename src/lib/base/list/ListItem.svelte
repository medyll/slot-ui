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

	import { createEventForwarder } from '../../engine/engine.js';
	import Icon from '../icon/Icon.svelte';
	import type { ElementProps } from '$typings/index.js';
	import Divider from '../divider/Divider.svelte';

	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLElement | null = null;
	export let style: string = '';
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	/** icon ti be displayed in the list's header */
	export let icon: string | null = null;
	/** title of the list */
	export let primary: string | null = null;
	/** sub-title of the list */
	export let secondary: string | null = null;
	export let action: string | null = null;
	/** show selected state */
	export let selected: boolean = false;
	export let showIcon: boolean = true;
	/** show divider after listItem */
	export let showDivider: boolean = false;
	export let dividerProps: Record<string, any> = {};
	export let transition: __sveltets_2_SvelteTransitionReturnType | undefined = undefined;

	export let disabled: boolean = false;
	// data to hold
	export let data: Record<string, any> = {};

	export let density: ElementProps['density'] = 'default';

	let listStateContext = getContext<any>('listStateContext');

	const handleClick = () => () => {
		// send whole listItem
		/** @deprecated */
		const eventDeprecated = custom_event('listclick', data, { bubbles: true });
		element?.dispatchEvent(eventDeprecated);

		const event = custom_event('listitem:click', { ...$$props }, { bubbles: true });
		element?.dispatchEvent(event);
	};

	const handleDblClick = () => () => {
		// send whole listItem
		/** @deprecated */
		const eventDeprecated = custom_event('list:dblclick', data, { bubbles: true });
		element?.dispatchEvent(eventDeprecated);

		const event = custom_event('listitem:dblclick', { ...$$props }, { bubbles: true });
		element?.dispatchEvent(event);
	};

	let isActive: boolean = false;
	$: if ($listStateContext?.selectorField && Object.keys(data ?? {}).length) {	 
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
		<div class="listItemIcon pad-ii ">
			<slot name="icon">
				{#if icon}<Icon {icon} />{/if}
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
{#if showDivider}
	<Divider {...dividerProps} />
{/if}

<style lang="scss" global>
	@import 'List';

	/* li:focus{
		outline:1px solid #ccc;
		outline-offset: -1px;
	} */
	.listItem.density-tight {
		padding: 0.5rem 0.25rem;
		margin: 0.125rem 0;
	}

	.listItem.density-default {
		padding: 1rem 0.25rem;
		margin: 0.25rem 0;
	}

	.listItem.density-kind {
		padding: 1.5rem 0.25rem;
		margin: 0.5rem 0;
	}
</style>
