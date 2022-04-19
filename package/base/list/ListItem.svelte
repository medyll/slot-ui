<script >import { getContext } from 'svelte';
import { custom_event } from 'svelte/internal';
import Divider from '../divider/Divider.svelte';
export let icon;
export let primary;
export let secondary;
export let action;
// data to hold
export let data = {};
export let density = 'default';
let ref;
let listStateContext = getContext('listStateContext');
const handleClick = () => () => {
    const event = custom_event('list:listItem:clicked', data, true);
    ref.dispatchEvent(event);
};
let isActive = false;
$: if ($listStateContext?.selectorField) {
    isActive = listStateContext.selector($listStateContext.selectorField, data);
}
</script>

<li class="listItem density-{density}" bind:this={ref} on:click={handleClick()} class:isActive>
	<span class="listItemChip" />
	<div class="listItemIcon">
		<slot name="icon" />
	</div>
	<div class="listItemContent">
		<div>
			<slot name="primary" />
		</div>
		<div>
			<slot name="secondary" />
		</div>
	</div>
	<div class="listItemAction">
		<slot name="action" />
	</div>
</li>
<Divider />

<style  global>:global(li.listItemTitle),
:global(li.listItem) {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
}
:global(li.listItemTitle) :global(.listItemContent),
:global(li.listItem) :global(.listItemContent) {
  flex: 1;
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemAction),
:global(li.listItem) :global(.listItemAction) {
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemIcon),
:global(li.listItem) :global(.listItemIcon) {
  text-align: center;
  padding: 0 0.5rem;
  overflow: hidden;
}
:global(li.listItemTitle.density-tight),
:global(li.listItem.density-tight) {
  padding: 0.5rem 0;
  margin: 0.125rem 0;
}
:global(li.listItemTitle.density-default),
:global(li.listItem.density-default) {
  padding: 1rem 0;
  margin: 0.25rem 0;
}
:global(li.listItemTitle.density-kind),
:global(li.listItem.density-kind) {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}

:global(.listItemTitle) :global(.listItemContent) :global([slot=primary]) {
  color: red;
}

:global(li.listItem:hover) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(li.listItem.isActive) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(li.listItem.isActive) :global(.listItemChip) {
  position: absolute;
  height: 50%;
  width: 3px;
  background-color: maroon;
  border-radius: 8px;
  left: -1px;
}

:global(.listItem.density-tight) {
  padding: 0.5rem 0;
  margin: 0.125rem 0;
}

:global(.listItem.density-default) {
  padding: 1rem 0;
  margin: 0.25rem 0;
}

:global(.listItem.density-kind) {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}

:global(.listItemIcon) {
  text-align: center;
  padding: 0 0.5rem;
  width: 2rem;
  overflow: hidden;
  opacity: 0.8;
}</style>
