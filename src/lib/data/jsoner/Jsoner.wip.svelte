<script lang="ts">
	import ComponentExample from "$lib/demo/ComponentExample.svelte";
	import Jsoner from './Jsoner.svelte';

	const data = {
		element: {
			taille: 'standard',
			autre: [
				'h4',
				'h5',
				'h8',
				'w16',
				'az5',
				'ds',
				'78g',
				'ss6',
				{ and: 'value', or: ['some', 'array', 'some', 'array'] }
			]
		},
		second: { try: { not: 'taht' }, next: ['some', 'array', { and: ['in array 1', 'in array 2'] }] }
	};
</script>

<ComponentExample component="Jsoner" cite="">
	<Jsoner {data} />
</ComponentExample> 
