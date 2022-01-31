<script lang="ts">
  import {listW, windowList} from '/src/stores/windowStore';

  function toggleWindow(frame: listW) {
    console.log({frame});
  }

  let countValue: listW;

  windowList.subscribe((value: listW) => {
    countValue = value;
  });

</script>

<div class="bar">
    {#each [...countValue] as [key, value]}
        <div>
            <button on:click="{()=>{toggleWindow(value)}}">{key}</button>
        </div>
    {/each}
</div>

<style>
    .bar {
        display: flex;
        grid-gap: 8px;
        background-color: #ededed;
        border-bottom: 1px solid #ccc;
        padding: 0.5rem 0.25rem;
    }
</style>

