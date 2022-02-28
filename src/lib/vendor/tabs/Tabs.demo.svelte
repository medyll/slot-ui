<script lang="ts">
  import Tabs from './Tabs.svelte';
  import TabsItemsProps from '$lib/vendor/tabs/Tabs.svelte';
  import Cartouche from '$lib/vendor/cartouche/Cartouche.svelte';

  const items: TabsItemsProps = [
    {label: 'theTitle', code: 'theTitle1'},
    {label: 'theTitle bis', code: 'theTitle2'},
    {label: 'theTitle ter', code: 'theTitle3', component: Cartouche, componentProps: {label: 'dynamic'}},
  ];
</script>
<Tabs {items}>
    tabs
</Tabs>
