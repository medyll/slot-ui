
<script lang="ts">

    import {goto} from '$app/navigation';

    const handleClick = () => () => {
      goto('explorer')
    }
</script>

<div style="z-index:0" class="dashBoard pos-abs w-full h-full overflow-auto pad-8">
    <div class="gridIcon">
        {#each [...Array(7)] as key,val}
            <div on:click={handleClick('test')} class="bg-palette-red-darker buttonPole">key</div>
        {/each}
    </div>
</div>

<style lang="scss">


  .gridIcon {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-gap: 64px;
    grid-template-columns: repeat(auto-fill, minmax(120px, auto));
  }

  .buttonPole {
    border-radius: 4px;
    border: 1px solid rgba(208, 191, 151, 0.3);
    padding: 0.5rem;
    height: 120px;
  }
</style>

