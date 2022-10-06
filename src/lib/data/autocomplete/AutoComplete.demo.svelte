<script lang="ts">
	import ComponentExample from '$components/demo/ComponentExample.svelte';
	import Jsoner from '../jsoner/Jsoner.svelte';
	import AutoComplete from './AutoComplete.svelte';

	let data = [
		{ id: 1, name: 'i', surname: 'am', lastname: 'groot' },
		{ id: 2, name: 'he', surname: 'is', lastname: 'groot' },
		{ id: 3, name: 'you', surname: 'are', lastname: 'groot' }
	];

	let findData: any;
</script>

<ComponentExample
	component="AutoComplete" >
	<div class="flex-v gap-medium">
		<h5>Props</h5>
		<div class="flex-v gap-medium">
			<h6>Default props</h6>
			<div>
				<AutoComplete class="marg-b" style="width:200px" bind:filteredData={findData} {data} />
			</div>
			<h6>Automatic fields menu</h6>
			<div>
				<AutoComplete
					class="marg-b"
					showSortMenu={true}
					style="width:200px"
					bind:filteredData={findData}
					{data}
				/>
			</div>
		</div>
		
	</div>
	<br />
	<div class="flex-v gap-medium">
		<h5>Results</h5>
		<div class="flex-h gap-medium">
			<!-- <div class="w-large flex-main"><Jsoner {data} /></div> -->
			<div class="w-large flex-main"><Jsoner data={findData} /></div>
		</div>
	</div>
</ComponentExample>
