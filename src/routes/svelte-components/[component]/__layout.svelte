<script lang="ts">
import Paper from '$lib/base/paper/Paper.svelte';
	import { slotUiComponentList } from '/src/sitedata/componentList';

	export let component: string = '';

	slotUiComponentList;
</script>
<slot /> 
