<script lang="ts">
  import VirtualList from '@sveltejs/svelte-virtual-list';

  export let items = [];

</script>

<div class="dataList">
    <slot name="head">

    </slot>
    <VirtualList height="100%" bind:items let:val>
        <slot item={val}>
        </slot>
    </VirtualList>
    <slot name="foot">

    </slot>
</div>

<style global lang="scss">

  .dataList {
    height: 100%;
    position: relative;

    .dataListHead {
      display: table-row;

      .dataListCell {
        display: table-cell;
        padding: 8px;
      }
    }

    .dataListRow {
      // display: table-row;
      display: inline-flex;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      margin: 0.25rem 0;

      .dataListCell {
        display: table-cell;
        padding: 8px;
        color:  var(--theme-color-text);
      }
    }

  }
</style>