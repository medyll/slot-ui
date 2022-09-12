<script lang="ts">
import ComponentDemo from '$components/ComponentExample.svelte';
	import Jsoner from '../jsoner/Jsoner.svelte';
import Finder from './Finder.svelte';

	let data = [
		{ id:1,name: 'i', surname: 'am', lastname: 'groot' },
		{ id:2,name: 'he', surname: 'is', lastname: 'groot' },
		{ id:3,name: 'you', surname: 'are', lastname: 'groot' }
	];

	let findData: any;

</script>


<ComponentDemo component="Finder" cite="This constant need about knowing what i was looking for, this need, i gave it a name.<br /> H.
Maifield, 1996">
<Finder class="marg-b" bind:filteredData={findData} {data} />
	<div class="flex-h gap-medium">
		<div class="w-large flex-main"><Jsoner data={data} /></div>
		<div class="w-large flex-main"><Jsoner data={findData} /></div>
	</div>
</ComponentDemo> 
