<script lang="ts">
  import Tree from '$lib/vendor/tree/Tree.svelte';

  let paths = [
    'About.vue',
    'Categories/Index.vue',
    'Categories/Demo.vue',
    'Categories/Flavors.vue'
  ];

  let pathsData = [
    {name: '', path: 'About'},
    {name: '', path: 'Categories/Index'},
    {name: '', path: 'Categories/Demo'},
    {name: '', path: 'Categories/Flavors'},
  ];
</script>

<Tree paths={pathsData} />