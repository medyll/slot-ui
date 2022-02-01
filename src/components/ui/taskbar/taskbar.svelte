<script lang="ts">
  import {sx4u} from '../../../use/sx4u';

  import {getContext} from 'svelte';
  import {WindowStoreListType, windowsStore, IChromeArgs} from '/src/stores/windowStore';

  let {toggle, current, theme} = getContext('theme');

  function toggleWindow(frame: IChromeArgs) {
    console.log({frame});
    let frameId = frame.frameId;
    windowsStore.toggle(frameId);
  }

  $: windows = $windowsStore as WindowStoreListType;

  console.log({theme});

</script>

<div use:sx4u="{{brd:3  }}" class="bar" >
    {#each [...windows] as [key, value]}
        <button on:click="{()=>{toggleWindow(value)}}">{key}</button>
    {/each}
</div>

<style >
    .bar {
        display: flex;
        grid-gap: 8px;
        /*background-color: #ededed;*/
        min-height: 48px;
        align-items: center;
        box-sizing: border-box
    }
</style>