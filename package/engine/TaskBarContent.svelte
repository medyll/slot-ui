<script >import { getContext } from 'svelte';
import { windowsStore } from '/src/stores/windowStore';
import { toggleStartMenu } from '../../configurations';
import { get_current_component } from 'svelte/internal';
import IconButton from '../vendor/button/IconButton.svelte';
const thisComponent = get_current_component();
let { toggle, current, theme } = getContext('theme');
function toggleWindow(frame) {
    let frameId = frame.frameId;
}
let windows;
$: windows = $windowsStore;
</script>

<IconButton on:click="{toggleStartMenu}" style="color:white;font-size: large" icon="faBarcode"/>
{#each [...windows] as [key, value]}
    <IconButton on:click="{()=>{toggleWindow(value)}}" style="color:white;font-size: large" icon="faWindow"/>
{/each}