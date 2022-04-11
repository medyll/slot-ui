<script >import { getContext } from 'svelte';
import { windowsStore } from '/src/lib/ui/window/windowStore';
import { toggleStartMenu } from './wactions.utils';
import IconButton from '../base/button/IconButton.svelte';
let { toggle, current, theme } = getContext('theme');
function toggleWindow(frame) {
    let frameId = frame.frameId;
}
let windows;
$: windows = $windowsStore;
</script>

<IconButton icon="faBarcode" on:click="{toggleStartMenu}" style="color:white;font-size: large"/>
{#each [...windows] as [key, value]}
    <IconButton on:click="{()=>{toggleWindow(value)}}" style="color:white;font-size: large" icon="faWindow"/>
{/each}