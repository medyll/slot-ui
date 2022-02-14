
<script lang="ts">

    import {goto} from '$app/navigation';
    import Divider from "../../vendor/divider/Divider.svelte";
    import ButtonPanel from "../../vendor/button/ButtonPanel.svelte";
    import Debug from "../../ui/debug/Debug.svelte";

    const handleClick = (where:string) => (event) => {
      goto(where)
    }
</script>

<div style="z-index:0" class="pos-abs w-full h-full overflow-auto pad-8">
    <div class="pad-4 dsp-block-inline flex-h flex-align-middle">
        <button on:click={handleClick('explorer')}> explorer</button>
        <button on:click={handleClick('what')}> what</button>
        <ButtonPanel actionComponent={Debug}></ButtonPanel>
    </div>
    <Divider />
    <div class="gridIcon">
        {#each [...Array(20)] as key,val}
            <div class="buttonPole dsp-inline"
            style="width:130px">
            </div>
        {/each}
    </div>
</div>

<style lang="scss">


  .gridIcon {
    width: 100%;
    display: grid;
    align-items: center;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(130px, auto));
  }

  .buttonPole {
    border-radius: 4px;
    background-color: rgba(#555,0.2);
    border: 1px solid rgba(208, 191, 151, 0.1);
    padding: 0.5rem;
    height: 120px;
  }
</style>

