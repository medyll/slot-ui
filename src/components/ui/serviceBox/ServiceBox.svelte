<script lang="ts">
  import {clickAway} from '../../../use/clickAway/clickAway';
  import IconButton from '../../vendor/button/IconButton.svelte';
  import ButtonPanel from '../../vendor/button/ButtonPanel.svelte';
  import Debug from '../debug/Debug.svelte';

  const onclose = function () {
    console.log('close ??')
  };

</script>

<div class="h-full grid-v serviceBox" >

    <div class="grid-main pad-8 gridIconBis">
        {#each [...Array(6)] as key,val }
            <!--for popper-->
            <ButtonPanel actionComponent={Debug}>Setting {val}</ButtonPanel>
        {/each}
    </div>
    <div   class="grid-h grid-align-right">
        <IconButton icon="faList"></IconButton>
        <IconButton icon="faList"></IconButton>
    </div>
</div>

<style lang="scss">
  .gridIconBis {
    width: 100%;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  }

  .serviceBox {
    width: 360px;
    height: 360px;
  }
</style>
