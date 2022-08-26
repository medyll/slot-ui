<svelte:options accessors={true}/>
<script>import Tabs from './Tabs.svelte';
import Cartouche from '../cartouche/Cartouche.svelte';
import Divider from '../divider/Divider.svelte';
import Button from '../button/Button.svelte';
const items = [
    { label: 'Tab 1', code: 'theTitle1', withContent: 'ff', secondary: 'some' },
    { label: 'Tab 2', code: 'theTitle2' },
    { label: 'Another tab', code: 'theTitle3', withComponent: Cartouche, componentProps: { label: 'inner component' } },
];
</script>

<Tabs activeTabCode="theTitle1" {items}/>
<Divider density="kind" expansion="centered"/>
<Tabs activeTabCode="theTitle3" {items}>
    <span slot="tabsTitleSlot">some tabs title</span>
    <span slot="tabsButtonSlot" ><Button bordered >button</Button></span>
</Tabs>

