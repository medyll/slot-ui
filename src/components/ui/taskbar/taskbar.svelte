<script lang="ts">
  import {sx4u} from '../../../use/sx4u/sx4u';
  import { goto } from '$app/navigation';
  import {getContext} from 'svelte';
  import {WindowStoreListType, windowsStore, IChromeArgs} from '/src/stores/windowStore';
  import {toggleStartMenu} from "../../../configurations";
  import { get_current_component } from "svelte/internal";

  const thisComponent = get_current_component();
  console.log(thisComponent);

  let {toggle, current, theme} = getContext('theme');

  function toggleWindow(frame: IChromeArgs) {
    let frameId = frame.frameId;
    goto('/explorer/scheme/client');
  }

  let windows;
  $:   windows = $windowsStore as WindowStoreListType;


</script>

<div use:sx4u="{{brdb:1,sm:{brdb: 2}}}" class="bar">
    <a on:click="{toggleStartMenu}">toggleStartMenu</a>
    {#each [...windows] as [key, value]}
        <button on:click="{()=>{toggleWindow(value)}}">{key}</button>
    {/each}
</div>

<style>
    .bar {
        display: flex;
        grid-gap: 8px;
        /*background-color: #ededed;*/
        min-height: 48px;
        align-items: center;
        box-sizing: border-box
    }
</style>