<script lang="ts">
  import {clickAway} from '../../uses/clickAway/clickAway';
  import IconButton from '../../base/button/IconButton.svelte';
  import ButtonMenu from '../../base/button/ButtonAction.svelte';
  import Debug from '../../base/debug/Debug.svelte';

  const onclose = function () {
    console.log('close ??')
  };

</script>

<div class="h-full flex-v serviceBox" >

    <div class="flex-main pad-8 gridIconBis">
        {#each [...Array(6)] as key,val }
            <!--for popper-->
            <ButtonMenu actionComponent={Debug}>Setting {val}</ButtonMenu>
        {/each}
    </div>
    <div   class="pad-2 flex-h flex-align-right">
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
