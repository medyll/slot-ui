<script lang="ts">
  import {getContext} from 'svelte';
  import type {IChromeArgs, WindowStoreListType} from '$lib/ui/window/window.store';
  import {windowsStore} from '$lib/ui/window/window.store';
  import {toggleStartMenu} from './wactions.utils';
  import IconButton from '../base/button/IconButton.svelte';
  import {openPopper} from '$lib/ui/popper/actions';
  import ServiceBox from '../ui/serviceBox/ServiceBox.svelte';  


  const popServiceProps = {
    component     : ServiceBox,
    componentProps: {
      some: 'what'
    }
  };

  function toggleWindow(frame: IChromeArgs) {
    let frameId = frame.frameId;
  }

  let windows;
  $:   windows = $windowsStore as WindowStoreListType;

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
