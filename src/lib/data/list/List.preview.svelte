<script lang="ts">
	import List from './List.svelte';

	let listItems = [];

	$: listItems = [...Array(1000)].map((val, index) => {
		return {
			primary: 'Primary title ' + index,
			secondary: 'secondary sub-title ' + index,
			icon: 'user',
			data: { id: index, name: index }
		};
	});

	$: data = [...Array(1000)].map((val, index) => {
		return {
			name: index + 'Raw data loop ' + index,
			secondary: 'secondary sub-title ' + index,
			icon: 'user'
		};
	});

	// sorterer={[{ sortByField: 'data.name' }]}
	function openIn() {}
</script>

<div class="flex-v gap-medium">
	<h5>Straight</h5>
	<div class="flex-h gap-small">
		<List
			density="default"
			height="250px"
			{listItems}
			onItemClick={openIn}
			selectorField="id"
			primary="ListItems, no slots"
			secondary="secondary text"
		/>
	</div>
</div>
