<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
export const style = undefined;
// this head is a head
// cells give width for the whole dataList
const headerer = writable([]);
setContext('dataListHead', headerer);
</script>

<div class="pos-sticky dataListHead shad-2" {style}>
	<slot />
</div>

<style global>:global(.dataListHead) {
  /* width: 900px;
        display: flex;
        border: 1px solid green; */
}
:global(.dataListHead) :global(.dataListCell) {
  /* flex: 1;
  background-color: red; */
}</style>
