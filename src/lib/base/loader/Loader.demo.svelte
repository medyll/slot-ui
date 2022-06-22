<script lang="ts">
	import Column from '../columner/Column.svelte';
	import Columner from '../columner/Columner.svelte';
	import Loader from './Loader.svelte';
</script>

<div class="flex-v gap-large pad-6 pos-rel border">
	<Columner style="height:750px">
		<Column>
			<Loader isLoading={true} /> 
		</Column>
		<Column>
			<Loader isError={true} /></Column>
		<Column><Loader isEmpty={true} /></Column>
	</Columner>
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
