<script lang="ts">
  import {listW, windowList} from '/src/stores/windowStore';

  export let frameId;

  let countValue;

  windowList.subscribe((value: listW) => {
    countValue = value;
  });

  console.log({frameId});

  // windowList.
</script>

<div class="grid">
    <div>icon</div>
    <div>here the window !! {frameId}</div>
    <div>
        <div>minimize</div>
        <div>maximize</div>
        <div>close</div>
    </div>
</div>

<style>
    .grid {
        display: flex;
    }
</style>