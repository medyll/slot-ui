<script lang="ts">
  import Cartouche from '../cartouche/Cartouche.svelte';
  import type TabsItemsProps from '../tabs/Tabs.svelte';
  import Tabs from '../tabs/Tabs.svelte';


  export * as DebugTypes from './Debug.svelte';

  const items: TabsItemsProps = [
    {label: 'theTitle', code: 'theTitle1'},
    {label: 'theTitle bis', code: 'theTitle2'},
    {
      label         : 'theTitle ter', code: 'theTitle3',
      component     : Cartouche,
      componentProps: {label: 'dynamic'}
    },
  ];

</script>


<div style="padding:0.5rem">
    <Cartouche isOpen={true} primary="debug zone here">
        <pre>{JSON.stringify($$props, null, " ")}</pre>
    </Cartouche>
</div>
