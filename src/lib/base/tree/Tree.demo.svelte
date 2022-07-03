<script lang="ts">
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
		{ name: '', path: 'Categories/Demo/Vue' },
		{ name: '', path: 'About' },
		{ name: '', path: 'More' },
		{ name: '', path: 'Categories/Demo/Vue/Demo' },
		{ name: '', path: 'Categories/Index' },
		{ name: '', path: 'Categories/About' },
		{ name: '', path: 'Categories/Demo' },
		{ name: '', path: 'New/With/Some/Unique/Levels/Yep' },
		{ name: '', path: 'New/With/Some/Other/Levels/Yep' }
	];

	let data = [{ name: '', path: 'Categories/Demo/Vue/Demo' }];
</script>

<div style="width:250px">
	<Tree pathField="path" paths={pathsData} />
</div>
