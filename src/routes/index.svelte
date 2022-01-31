<script lang="ts">
  import {listW, windowList} from '/src/stores/windowStore';
  import Taskbar from '/src/components/ui/taskbar/taskbar.svelte';
  import Window from '/src/components/ui/window.svelte';

  function addWindow(frameId: string) {
    windowList.open({
      frameId: frameId,
      title  : `the ${frameId}`
    });
  }

  let countValue;

  windowList.subscribe((value: listW) => {
    countValue = value;
  });

</script>

<a on:click="{()=>{addWindow('red - point')}}">test</a>
<a on:click="{()=>{addWindow('roudde')}}">test</a>
<a on:click="{()=>{addWindow('456456')}}">test</a>

<Taskbar/>
{#each [...countValue] as [key, value]}
    <Window frameId="{key}" />
{/each}
<pre>
    <!--{JSON.stringify($countValue, null, " ")}-->
</pre>

