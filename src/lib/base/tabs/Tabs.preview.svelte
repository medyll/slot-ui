<svelte:options accessors={true}/>
<script lang="ts">
  import Tabs from './Tabs.svelte';
  import type {TabsItemsProps} from './types';
  import Cartouche from '../cartouche/Cartouche.svelte';
  import Divider from '../divider/Divider.svelte';
  import Button from '../button/Button.svelte';

  const items: TabsItemsProps = [
    {label: 'Tab 1', code: 'theTitle1', withContent:'ff',secondary:'some'},
    {label: 'Tab 2', code: 'theTitle2'},
    {label: 'Another tab', code: 'theTitle3', withComponent: Cartouche, componentProps: {label: 'inner component'}},
  ];
</script>
 
<Tabs activeTabCode="theTitle3" {items}>
    <!-- <span slot="tabsTitle">some tabs title</span>
    <span slot="tabsButtons" ><Button bordered >button</Button></span> -->
</Tabs>

