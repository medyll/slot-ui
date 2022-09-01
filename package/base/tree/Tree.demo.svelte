<script>import { filter } from 'lodash';
import ComponentDemo from '$components/ComponentDemo.svelte';
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
    { name: '', path: 'Categories/Demo/Vue', other: 'item' },
    { name: '', path: 'About' },
    { name: '', path: 'More' },
    { name: '', path: 'Categories/Demo/Vue/Demo' },
    { name: '', path: 'Categories/Index' },
    { name: '', path: 'Categories/About' },
    { name: '', path: 'Categories/Demo' },
    { name: '', path: 'New/With/Some/Unique/Levels/Yep' },
    { name: '', path: 'New/With/Some/Other/Levels/Yep', data: { isbel: 'or' } }
];
let data = [
    { name: '', path: 'Categories/Demo/Vue/Demo' },
    {
        name: '',
        path: 'New/With/Some/Unique/Levels/Yep'
    }
];
let selectedData = [];
</script>

<ComponentDemo
	component="Tree"
	cite="We were looking for leaves and we found trees<br /> B. Esein, 1354"
>
	<div class="flex-v gap-medium">
		<div style="width:250px">
			<Tree pathField="path" {data} paths={pathsData} bind:selectedData />
		</div>
	</div>
	<pre>{JSON.stringify(
			selectedData.filter((x) => x),
			null,
			' '
		)}</pre>
</ComponentDemo>
