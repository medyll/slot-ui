<svelte:options accessors={true} />

<script lang="ts">
  import {getContext} from 'svelte';
  import { fade,slide } from 'svelte/transition';
  import {createEventDispatcher, custom_event, get_current_component} from 'svelte/internal';
  import type {ElementProps} from './types';
  import {createEventForwarder} from '../../engine/engine';
import Icon from '../icon/Icon.svelte';

  /*  common slotUi exports*/
  let className = '';
  export {className as class };
  export let element: HTMLElement ;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let icon: string;
  export let primary: string = '';
  export let secondary: string;
  export let action: string;
  export let selected: boolean;
  export let showIcon: boolean                    = true;

  // data to hold
  export let data: Record<string, any> = {};

  export let density: ElementProps['density'] = 'default';

  let listStateContext = getContext<any>('listStateContext');

  const handleClick = () => () => {
    const event = custom_event('listclicked', data, {bubbles: true});
    element.dispatchEvent(event);
  };

  const handleDblClick = () => () => {
    const event = custom_event('list:dblclicked', data, {bubbles: true});
    element.dispatchEvent(event);
  };

  let isActive: boolean = false;
  $: if ($listStateContext?.selectorField) {
    isActive = listStateContext.selector($listStateContext.selectorField, data);
  }
</script>

<li
	bind:this={element}
	class="listItem density-{density} {className}"
	class:isActive
	transition:fade
	on:click={handleClick()}
	on:dblclick={handleDblClick()}
>
	<span class="listItemChip" />
	{#if showIcon}
		<div class="listItemIcon">
			<slot name="icon">
				<Icon {icon} />
			</slot>
		</div>
	{/if}
	<div class="listItemContent">
		<div>
			<slot name="primary">
				{primary}
			</slot>
		</div>
		<div class="itemSecondary">
			<slot name="secondary">
				{secondary}
			</slot>
		</div>
	</div>
	<div class="listItemAction">
		<slot name="action">
			{action}
		</slot>
	</div>
</li>

<style lang="scss" global>
	@import 'List';

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

	.listItemIcon {
		text-align: center;
		padding: 0 0.5rem;
		width: 2rem;
		overflow: hidden;
		opacity: 0.8;
	}
</style>
