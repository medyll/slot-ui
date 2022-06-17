<script lang="ts">
	import { location } from 'svelte-spa-router';
	import { onMount } from 'svelte';
	import Debug from '$lib/base/debug/Debug.svelte';
import { openChromeFrame } from '../chromeFrame/chromeFrame.utils';

	export let params: { page: string; subpage: string } = {};
	const windowList: any[] = [];

	const pageComp = {
		dashboard: Debug,
		tooling: Debug
	};

	const page = params.page;
	const subpage = params.subpage;
	// get parent as #body
	// insert frame if not already
	// activate frame
	onMount(() => {
		// alert(page);
	});

	/*console.log(page);
  console.log(subpage);
  console.log(pageComp[page]);*/

	openChromeFrame(page, { component: pageComp[page], title: 'title ' + page });
</script>
