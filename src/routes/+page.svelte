<script lang="ts">
	import type { UiContextType } from '$contexts/ui.context.ts';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let uiContext = getContext<Writable<UiContextType>>('uiContext');

	$uiContext.drawerFlow = 'fixed';
</script>

<div class="overflow-auto flex-v flex-align-middle-center">
	<div class="block h-full flex-v gap-large pad-t-10">
		<h1>slotUI</h1>
		<div class="w-full">
			<h5 class="text-full">
				SlotUi could be a component library for svelte<br />
				Based on cssFabric at css properties level<br />
				It's also rfee to not be used
			</h5>
		</div>
		<div class="w-full">
			<div class="flex-h gap-large">
				<div class="w-large">
					re<br />
					re<br />
					re<br />
					re<br />
					re<br />
					re
				</div>
				<div class="border radius-small">re</div>
			</div>
		</div>
	</div>
	<div class="block">s</div>
	<div class="block">s</div>
	<div class="block">s</div>
	<div class="block">s</div>
</div>

<style global lang="scss">
	.block {
		min-height: 80vh;
		border-bottom: 1px solid #ccc;
		min-width: 80%;
	}
	/*  #layout{
        overflow:auto!important;
    } */
</style>
