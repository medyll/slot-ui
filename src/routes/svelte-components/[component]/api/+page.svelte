<svelte:options accessors />
<script lang="ts">
	import { componentApiReadMe } from '$sitedata/api/indexApiFull.js';

	export let data: any = {};

	$: tt = componentApiReadMe?.[data.component + 'Api'];

	console.log(tt)
</script>

<div>
	<h4>
		Api for {data.component} component
	</h4>
</div>
<div>
	<svelte:component this={tt} />
</div>
<div  class="flex-v gap-medium " >
	<h5>Link to examples :</h5>
	<div  class="marg-l-4">
		<a  rel="external" href="./svelte-components/{data.component.toLowerCase()}">Component "{data.component}" implementation examples</a> 
	</div>
</div>
