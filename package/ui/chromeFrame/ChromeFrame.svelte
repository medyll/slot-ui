<svelte:options accessors/>
<script context="module">"use strict";
/* namespace __propDef {
  vary : 'red'
} */
// import __propDef from
// declare const __propDef: { events: { 'chromeframe:close': CustomEvent<any>,'chromeframe:hide': CustomEvent<any> } };
</script>

<script>import { getChromeFrame } from './chromeFrame.utils';
export let frameId;
export let showCommands;
const frameStore = getChromeFrame(frameId);
function handleRemove() {
    frameStore.remove();
}
function handleHide() {
    frameStore.toggle();
}
</script>

<div
	on:chromeframe:hide
	on:chromeframe:close
	class="chromeFrame flex-v pos-abs top-0 h-full overflow-hidden w-full "
	style="z-index:{$frameStore?.zIndex};display:{$frameStore?.minimized ? 'none' : ''}"
>
	{#if $frameStore?.showCommandBar}
		<div class="flex-h flex-align-middle gap-medium pad-1 pad-ii-2 border-b">
			<div class="flex-main h3">{frameId}</div>
			<div>{frameId}</div>
			<button on:click={handleHide}>hide</button>
			<button on:click={handleRemove}>close</button>
		</div>
	{/if}
	<div class="flex-main pos-rel overflow-hidden">
		<svelte:component this={$frameStore?.component} {...$frameStore?.componentProps} />
	</div>
</div>

<style global>:global(.chromeFrame) {
  color: var(--theme-color-foreground);
  background-color: var(--theme-color-background);
}</style>
