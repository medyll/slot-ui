<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte/internal';
	import type { UiContextType } from 'src/contexts/ui.context.js';

	let uiContext = getContext<Writable<UiContextType>>('uiContext');

	$uiContext.drawerFlow = 'relative';
</script>
<svelte:head>
	<title>SlotUi compnents list</title>
	<meta name="description" />
</svelte:head>
<div class="pad-4 ">
	<slot />
</div>
