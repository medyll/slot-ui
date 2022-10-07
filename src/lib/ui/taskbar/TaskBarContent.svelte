<script lang="ts"> 
  import type {IChromeArgs, WindowStoreListType} from '$lib/ui/window/store.js';
  import {windowsStore} from '$lib/ui/window/store.js'; 
  import IconButton from '$lib/base/button/IconButton.svelte'; 
  import ServiceBox from '$lib/ui/serviceBox/ServiceBox.svelte';  


  const popServiceProps = {
    component     : ServiceBox,
    componentProps: {
      some: 'what if'
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
