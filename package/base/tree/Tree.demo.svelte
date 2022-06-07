<script>import Tree from './Tree.svelte';
let paths = [
    'About.vue',
    'Categories/Index.vue',
    'Categories/Demo.vue',
    'Categories/Flavors.vue',
    'Categories/Demo',
    'Categories/Demo/Flavors.vue',
];
let pathsData = [
    { name: '', path: 'About' },
    { name: '', path: 'Categories/Index' },
    { name: '', path: 'Categories/Demo' },
    { name: '', path: 'Categories/About' },
    { name: '', path: 'Categories/Demo/Vue/Demo' },
    { name: '', path: 'Categories/Demo/Vue' },
];
</script>

<Tree paths={pathsData}/>