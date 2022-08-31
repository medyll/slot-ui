<script lang="ts">
	import List from './List.svelte';
	import { onMount } from 'svelte';
	import ListItem from './ListItem.svelte';
	import { null_to_empty } from 'svelte/internal';
	import Icon from '../icon/Icon.svelte';
	import IconButton from '../button/IconButton.svelte';

	let cc = 0;
	let listItems = [];
	let sorterer = { sortByField: 'data.name' };

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
