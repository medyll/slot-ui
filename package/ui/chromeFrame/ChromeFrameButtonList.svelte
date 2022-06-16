<script>import { chromeFrameStore } from './chromeFrame.store';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
import Icon from '../../base/icon/Icon.svelte';
import Button from '../../base/button/Button.svelte';
/** common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/** end slotUi exports*/
$: console.log('from chromFrameButtonList', chromeFrameStore);
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
					class={value.active ? 'active' : ''} 	>
					{value.title ?? value.frameId}
					<div slot="actionIcon"><Icon class="theme-text-primary" icon="window-close" /></div>
				</Button>
			</slot>
		</div>
	{/each}
</div>

<style global>:global(.buttonRail) :global(button:not(.active)) {
  border: 1px solid transparent;
  background-color: transparent;
}
:global(.buttonRail) :global(button.active) {
  border: 1px solid var(--theme-color-border);
}
:global(.buttonRail) :global(button:hover) {
  border: 1px solid var(--theme-color-primary);
}</style>
