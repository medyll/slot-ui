<script lang="ts">
  import {ThemeWrapper, ThemeToggle} from 'svelte-themer';
  import {WindowStoreListType, windowsStore} from '/src/stores/windowStore';
  import Window from '/src/components/ui/window.svelte';

  function addWindow(frameId: string) {
    windowsStore.open({
      frameId: frameId,
      title  : `the ${frameId}`
    });
  }

  let countValue;

  windowsStore.subscribe((value: WindowStoreListType) => {
    countValue = value;
  });

</script>


<a on:click="{()=>{addWindow('1st')}}">1st</a>
<a on:click="{()=>{addWindow('2nd')}}">2nd</a>
<a on:click="{()=>{addWindow('3rd')}}">3rd</a>
{#each [...countValue] as [key, value]}
    <Window frameId="{key}"/>
{/each}

<style lang="scss" global>
  @import 'node_modules/ress/ress';

  button {
    border: 0.5px solid #ccc;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: white;

    &:hover {
      background-color: #ededed;
    }
  }
</style>