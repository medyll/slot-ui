<script lang="ts">
	import { componentReadMe } from '$lib/sitedata/api';
	export let component: string = '';
	export let cite: string = '';

	$: finalCompReadMe = componentReadMe?.[component.toLowerCase()];
</script>

<div class="flex-v gap-large w-full">
	<h5>{`<${component} />`}</h5>
	<cite><p>{@html cite}</p></cite>
	<div class="flex-h flex-wrap gap-large">
		<div class="flex-main"><slot /></div>
		<div><svelte:component this={finalCompReadMe} /></div>
	</div>
</div>
