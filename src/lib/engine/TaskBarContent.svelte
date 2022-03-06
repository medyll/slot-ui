<script lang="ts">
  import {getContext} from 'svelte';
  import type {IChromeArgs, WindowStoreListType} from '/src/lib/ui/window/windowStore';
  import {windowsStore} from '/src/lib/ui/window/windowStore';
  import {toggleStartMenu} from '../wactions.utils';
  import IconButton from '../vendor/button/IconButton.svelte';


  let {toggle, current, theme} = getContext('theme');

  function toggleWindow(frame: IChromeArgs) {
    let frameId = frame.frameId;
  }

  let windows;
  $:   windows = $windowsStore as WindowStoreListType;

</script>

<IconButton icon="faBarcode" on:click="{toggleStartMenu}" style="color:white;font-size: large"/>
{#each [...windows] as [key, value]}
    <IconButton on:click="{()=>{toggleWindow(value)}}" style="color:white;font-size: large" icon="faWindow"/>
{/each}