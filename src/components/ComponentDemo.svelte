<script lang="ts">
	import { componentReadMe } from '$lib/sitedata/api';
	export let component: string = '';
	export let cite: string = '';
 

    $: finalCompReadMe = componentReadMe?.[component.toLowerCase()]
</script>

<div class="flex-v gap-large">
	<h5>{`<${component} />`}</h5>
	<cite><p>{@html cite}</p></cite>
    <svelte:component this={finalCompReadMe} />
	<slot />
</div>
