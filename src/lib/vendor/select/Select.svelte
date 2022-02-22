<script lang="ts">
	import { stickTo } from '$lib/uses/stickTo/stickTo';
	import type { ElementProps } from 'src/types';

	export let data: ElementProps['data'] | undefined = undefined;
	export let options: { data?: ElementProps['data']; text: string; icon?: any }[] = [];

	let innerRef;
	let inputRef: HTMLElement;
	let absolute = 'absolute';
	let isVisible: boolean = false;

	let timerClick: any;

	const show = (visible: boolean) => (event) => {
		timerClick = setTimeout(() => {
			isVisible = visible;
		}, 250);
	};

	const handleClick = (visible: any) => (event: MouseEvent) => {
		event.stopPropagation();
		clearTimeout(timerClick);
		setTimeout(() => {
			inputRef.focus();
		}, 0);
	};
</script>

<input bind:this={inputRef} id="cool" on:blur={show(false)} on:focus={show(true)} />
<ul
	on:click={handleClick('clicked')}
	bind:this={innerRef}
	class="select pos-abs shad-16 inputBorder"
	style="display:{isVisible ? 'block' : 'none'}"
	use:stickTo={{ parentNode: document.getElementById('cool'), position: 'B' }}
	role="listbox"
>
	{#each options as option}
		<slot {option}>123</slot>
	{/each}
</ul>

<style lang="scss" global>
	.select {
		background-color: rgba(255, 255, 255, 0.2);
		height: 160px;
		width: 160px;
		border-radius: 6px;
	}
</style>
