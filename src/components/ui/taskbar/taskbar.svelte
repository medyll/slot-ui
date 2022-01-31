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

<div>
    {#each [...countValue] as [key, value]}
        <div>
            <button on:click="{()=>{toggleWindow(value)}}">test</button>
        </div>
    {/each}
</div>

