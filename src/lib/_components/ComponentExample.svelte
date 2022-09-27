<script lang="ts">
	import { componentReadMe } from '$sitedata/api/indexApi.js';
	export let component: string = '';
	export let cite: string = '';

	$: finalCompReadMe = componentReadMe?.[component.toLowerCase()];
</script>

<div class="flex-v gap-large w-full">
	<h4>{`<${component} />`}</h4>
	<cite><p>{@html cite}</p></cite>
	{#if $$slots.default}
	<div  class="flex-v gap-medium " >
		<h5>Component {component} examples :</h5>
		<div class="marg-l-4"><slot /></div>
	</div>
	{/if}
	<div  class="flex-v gap-medium " >
		<h5>Api preview :</h5>
		<div  class="marg-l-4"><svelte:component this={finalCompReadMe} /></div>
	</div>
	<div  class="flex-v gap-medium " >
		<h5>Link to api :</h5>
		<div  class="marg-l-4">
			<a href="svelte-components/{component.toLowerCase()}/api">Api for component "{component}"</a>
		</div>
	</div>
</div>
