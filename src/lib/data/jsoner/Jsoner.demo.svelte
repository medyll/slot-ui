<script lang="ts">
	import appscheme from '../../../demoData/appscheme.json';
	import Jsoner from './Jsoner.svelte';

	const data = {
		element: { taille: 'standard', autre: ['h4', 'h5','h8', 'w16','az5', 'ds','78g', 'ss6', { and: 'value',or:['some', 'array','some', 'array'] }] },
		second: { try: { not: 'taht' }, next: ['some', 'array', { and: ['in array 1','in array 2'] }] }
	};
</script> 
<div class="flex-v gap-large">
	<h5>{'<Jsoner />'}</h5>
	<Jsoner data={data} />
</div> 
