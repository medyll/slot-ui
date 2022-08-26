<script lang="ts">
	import Column from '../columner/Column.svelte';
	import Columner from '../columner/Columner.svelte';
	import Loader from './Loader.svelte';
</script>

<div class="flex-v gap-large">
	<h5>{'<Loader />'}</h5>
	<cite><p>
		And suddenly, in this dark cabinet, i realized that the most pleasant phase was that of waiting.<br /> D. Pentes, 824
	</p></cite>
	<div class="flex-v gap-medium w-large pos-rel">
		<h5>Loading</h5>

		<div class="pos-rel h-large">
			<Loader isLoading={true} />
		</div>
		<h5>On error</h5>

		<div class="pos-rel h-large">
			<Loader isError={true} />
		</div>
		<h5>Is empty</h5>

		<div class="pos-rel h-large">
			<Loader isEmpty={true} />
		</div>
	</div>
</div>
