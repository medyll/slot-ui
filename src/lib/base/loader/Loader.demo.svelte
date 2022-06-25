<script lang="ts">
	import Column from '../columner/Column.svelte';
	import Columner from '../columner/Columner.svelte';
	import Loader from './Loader.svelte';
</script>

<div class="flex-v gap-large">
	<h5>{'<Loader />'}</h5>
	<div class="flex-v gap-medium w-large">
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
	<!-- <div>isLoading</div>
	<div class="w-medium h-medium pos-rel border pad">
		<Loader isLoading={true} />
	</div>
    <div>isError</div>
	<div class="w-medium h-medium pos-rel">
		<Loader isError={true} />
	</div>
    <div>isEmpty</div>
	<div class="w-medium h-medium pos-rel">
		<Loader isEmpty={true} />
	</div> -->
</div>
