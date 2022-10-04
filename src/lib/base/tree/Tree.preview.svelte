<script lang="ts">
	import ComponentDemo from '$lib/_components/ComponentExample.svelte';
	import Tree from './Tree.svelte';

	let paths = [
		'About.vue',
		'Categories/Index.vue',
		'Categories/Demo.vue',
		'Categories/Flavors.vue',
		'Categories/Demo',
		'Categories/Demo/Flavors.vue'
	];

	let pathsData = [
		{ name: '', path: 'Categories/Demo/Svelte', other: 'item' },
		{ name: '', path: 'Categories/Demo/Svelte/Demo' },
		{ name: '', path: 'Categories/Index' },
		{ name: '', path: 'Categories/About' },
		{ name: '', path: 'Categories/Demo' }
	];

	let data = [
		{ name: '', path: 'Categories/Demo/Vue/Demo' },
		{
			name: '',
			path: 'New/With/Some/Unique/Levels/Yep'
		}
	];

	let selectedData: any[] = [];
</script>

<div class="flex-v gap-medium">
	 
		<Tree pathField="path" paths={pathsData} bind:selectedData />
 
</div>
