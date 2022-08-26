<script lang="ts">
import Paper from '$lib/base/paper/Paper.svelte';
	import { slotUiComponentList } from '$sitedata/componentList';

	export let component: string = '';

	slotUiComponentList;
</script>
 
<slot /> 
