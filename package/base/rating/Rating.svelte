<script>import Icon from '../icon/Icon.svelte';
let className = '';
export { className as class };
export let element = null;
export let style = '';
/**    maximum rate     */
export let ratingBase = 4;
/** current score */
export let scored = 0;
/** default icon to be used when not using slots */
export let defaultIcon = undefined;
/** scored icon to be used when not using slots */
export let scoredIcon = undefined;
/** can be vertical or horizontal */
export let direction = 'horizontal';
const title = `${scored} / ${ratingBase}`;
</script>

<div
	bind:this={element}
	class="rating {className}"
	style="--direction={direction === 'horizontal' ? 'row' : 'column'};{style}"
	{title}
>
	{#each [...Array(ratingBase)] as rate, idx}
		{#if idx + 1 <= scored}
			<slot name="scoredSlot">
				<Icon icon={scoredIcon} />
			</slot>
		{:else}
			<slot>
				<Icon icon={defaultIcon} />
			</slot>
		{/if}
	{/each}
</div>

<style>.rating {
  display: flex;
  flex-direction: var(--direction);
  gap: 0.25rem;
}</style>
