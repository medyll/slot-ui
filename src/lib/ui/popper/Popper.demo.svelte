<script lang="ts">
	import Popper from './Popper.svelte';
	import ComponentExample from '$components/ComponentExample.svelte';
	import Button from '$lib/base/button/Button.svelte';

	let isOpen = false;
</script>

<ComponentExample component="Popper">
	<div class="flex-v gap-large">
		<h5>Popper slot</h5>
		<div>
			<Popper bind:isOpen position="BC" autoClose class="w-large marg-t-1">
				<Button
					slot="holderSlot"
					on:click={() => (isOpen = !isOpen)}
					style="cursor:pointer"
					class="border text-center pointer {isOpen ? 'theme-bg-paper shad-3' : ''}"
				>
					popper
				</Button>
				Poper content
			</Popper>
		</div>
	</div>
</ComponentExample>
