<script lang="ts">
  import Cartouche  from '../../vendor/cartouche/Cartouche.svelte';
  import Tabs from '../../vendor/cartouche/tabs/Tabs.svelte';
  import type TabsItemsProps from '../../vendor/cartouche/tabs/Tabs.svelte';


  export * as DebugTypes from "./Debug.svelte";

  const items: TabsItemsProps = [
    {label: 'theTitle', code: 'theTitle1'},
    {label: 'theTitle bis', code: 'theTitle2'},
    {label: 'theTitle ter', code: 'theTitle3',component: Cartouche,componentProps:{label:'dynamic'}},
  ];

</script>


<div class="pad-2">

    <Tabs activeTabCode="theTitle1" {items}>tabs</Tabs>
</div>
<div style="padding:0.5rem">
    <Cartouche label="debug zone here">
        <pre>{JSON.stringify($$props, null, " ")}</pre>
    </Cartouche>
</div>
<div style="padding:0.5rem">
    <Cartouche label="debug">
        <pre>{JSON.stringify($$props, null, " ")}</pre>
    </Cartouche>
</div>
<div style="padding:0.5rem">
    <Cartouche label="debug">
        <pre>{JSON.stringify($$props, null, " ")}</pre>
    </Cartouche>
</div>


