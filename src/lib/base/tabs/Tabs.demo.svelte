<svelte:options accessors={true}/>
<script lang="ts">
  import Tabs from './Tabs.svelte';
  import type {TabsItemsProps} from './types';
  import Cartouche from '../cartouche/Cartouche.svelte';
  import Divider from '../divider/Divider.svelte';
  import Button from '../button/Button.svelte';
  /* demo */
  import ComponentExample from '$lib/demo/ComponentExample.svelte';
  import DemoPage from '$lib/base/demoer/DemoPage.svelte';
  import Demoer from '../demoer/Demoer.svelte';
  import {defaultsArgsFromProps} from '../demoer/demoer.utils';
  /* demo */

  const items: TabsItemsProps = [
    {label: 'Tab 1', code: 'tab1', withContent: 'ff'},
    {label: 'Tab 2', code: 'tab2'},
    {label: 'Another tab', code: 'tab3', withComponent: Cartouche, componentProps: {label: 'inner component'}},
  ];

  let parametersSlot: any = {
    activeTabCode: {
      type  : 'string',
      values: ['tab1', 'tab2', 'tab3', undefined],
    },
  };

  $: componentArgsSlot = {
    activeTabCode: defaultsArgsFromProps('activeTabCode', parametersSlot),
  };

  let codeSlot = `
<Tabs activeTabCode="tab3" onTabClick={()=>{}} {items}>
    <span slot="tabsTitleSlot">Some tabs title</span>
    <span slot="tabsButtonSlot" ><Button bordered >button</Button></span>
</Tabs>`;

</script>

<ComponentExample cite="" component="Tabs">
    <div class="flex-v gap-large w-full">
        <DemoPage code={codeSlot} component="Tabs" title="Using slots">
            <Demoer
                    componentArgs={componentArgsSlot}
                    let:activeParams
                    parameters={parametersSlot}>
                <Tabs activeTabCode="tab1" {...activeParams}
                      onTabClick={(e)=>{console.log(e); componentArgsSlot.activeTabCode=e.code}}
                      style="height:100px;width:450px" {items} let:activeTabCode>
                    <span slot="tabsTitleSlot">Some tabs title</span>
                    <span slot="tabsButtonSlot"><Button bordered>button</Button></span>
                    <div slot="innerTabSlot">
                        <div class="pad-4">
                            selected : {activeTabCode}
                        </div>
                    </div>
                </Tabs>
            </Demoer>
        </DemoPage>
    </div>
    <!--<Tabs activeTabCode="tab1" {items}/>
    <Divider density="kind" expansion="centered"/>-->

</ComponentExample>

