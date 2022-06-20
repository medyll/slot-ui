<script>import { getContext } from 'svelte';
import { windowsStore } from '../ui/window/window.store';
import { toggleStartMenu } from './wactions.utils';
import IconButton from '../base/button/IconButton.svelte';
import { openPopper } from '../ui/popper/actions';
import ServiceBox from '../ui/serviceBox/ServiceBox.svelte';
const popServiceProps = {
    component: ServiceBox,
    componentProps: {
        some: 'what'
    }
};
function toggleWindow(frame) {
    let frameId = frame.frameId;
}
let windows;
$: windows = $windowsStore;
</script>
{#each [...windows] as [key, value]}
    <IconButton on:click="{()=>{toggleWindow(value)}}" style="color:white;font-size: large" icon="home"/>
{/each}
<slot></slot>
<!--
<button on:click={(event)=>{
            event.stopPropagation();
            openPopper('DaPopper',{...popServiceProps})}}>Service Box here
</button>-->
