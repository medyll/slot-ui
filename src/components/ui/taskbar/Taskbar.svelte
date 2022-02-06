<script lang="ts">
  import {sx4u} from '../../../use/sx4u/sx4u';
  import {goto} from '$app/navigation';
  import {getContext} from 'svelte';
  import {WindowStoreListType, windowsStore, IChromeArgs} from '/src/stores/windowStore';
  import {toggleStartMenu} from '../../../configurations';
  import {get_current_component} from 'svelte/internal';
  import Icon from "../icon/Icon.svelte";
  import IconButton from "../../vendor/iconButton/IconButton.svelte";

  const thisComponent = get_current_component();

  let {toggle, current, theme} = getContext('theme');

  function toggleWindow(frame: IChromeArgs) {
    let frameId = frame.frameId;
    // goto('/explorer/scheme/client');
  }

  let windows;
  $:   windows = $windowsStore as WindowStoreListType;

</script>

<div class="bar" >
    <IconButton on:click="{toggleStartMenu}" style="color:white;font-size: large" icon="faBarcode" />
    {#each [...windows] as [key, value]}
        <IconButton on:click="{()=>{toggleWindow(value)}}" style="color:white;font-size: large" icon="faWindow" />
    {/each}
</div>
<style>
    .bar {
        display: flex;
        grid-gap: 8px;
        background-size: auto;
        background-color: rgba(255,255,255, 0.1);
        backdrop-filter: blur(20px);
        min-height: 32px;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding:4px 0;
    }
</style>