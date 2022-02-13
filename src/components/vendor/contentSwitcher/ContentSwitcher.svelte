<script context="module" lang="ts">

	import IconButton from '../button/IconButton.svelte';
	import type {TIcon} from '../../ui/icon/Icon.svelte';
	import type { useContentSwitcher } from './useContentSwitcher';
</script>

<script lang="ts">

	export let icon: TIcon = 'faToggleOff';
	export let parent: HTMLElement;

	let visibleSate: boolean = false;
	let thisHolderRef: any;
	let thisRef: any;

	function handleClick(event: MouseEvent) {
		visibleSate = !visibleSate;

		const children: HTMLCollection = parent.children;

		// iterate over all child nodes
		Array.from(children).forEach((li: any) => {
			//li.style.transform = visibleSate ? 'scale(0,0)' : '';
			li.style.display = visibleSate ? 'none' : '';
		});

		if (visibleSate) {
			parent.appendChild(thisRef);
		} else {
			thisHolderRef.appendChild(thisRef);
		}
	}
</script>

<IconButton  iconFontSize="small" on:click={handleClick} {icon} />
<div style="display:none" bind:this={thisHolderRef}>
	<div class="grid-h grid-align-middle" style="width:100%;flex:1;" bind:this={thisRef}>
		<div>
			<IconButton iconFontSize="small"   on:click={handleClick} icon="faChevronLeft" />
		</div>
		<div class="grid-main">
			<slot />
		</div>
	</div>
</div>
