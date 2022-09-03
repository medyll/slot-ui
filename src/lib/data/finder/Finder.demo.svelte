<script lang="ts">
import ComponentDemo from '$components/ComponentDemo.svelte';
	import Jsoner from '../jsoner/Jsoner.svelte';
import Finder from './Finder.svelte';

	let data = [
		{ name: 'i', surname: 'am', lastname: 'groot' },
		{ name: 'he', surname: 'is', lastname: 'groot' },
		{ name: 'you', surname: 'are', lastname: 'groot' }
	];

	let findData: any;

</script>


<ComponentDemo component="Finder" cite="This constant need about knowing what i was looking for, this need, i gave it a name.<br /> H.
Maifield, 1996">
<Finder bind:filteredData={findData} {data} />
	<div class="flex-h gap-medium">
		<div><Jsoner data={data} /></div>
		<div><Jsoner data={findData} /></div>
	</div>
</ComponentDemo> 
