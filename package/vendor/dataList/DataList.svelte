<script >import VirtualList from '@sveltejs/svelte-virtual-list';
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

<style global >:global(.dataList) {
  height: 100%;
  position: relative; }
  :global(.dataList) :global(.dataListHead) {
    display: table-row; }
    :global(.dataList) :global(.dataListHead) :global(.dataListCell) {
      display: table-cell;
      padding: 8px; }
  :global(.dataList) :global(.dataListRow) {
    display: inline-flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin: 0.25rem 0; }
    :global(.dataList) :global(.dataListRow) :global(.dataListCell) {
      display: table-cell;
      padding: 8px;
      color: var(--theme-color-text); }
</style>