<script>import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
export const style = undefined;
export let element = undefined;
export let stickyHeader = true;
const dataListStore = getContext('dataListContext');
// this head is a head
// cells give width for the whole dataList
const headerer = writable([]);
setContext('dataListHead', headerer);
let clientWidth;
$: if (element?.children)
    [...element?.children].forEach((node, index) => {
        const width = node.offsetWidth + 'px';
    });
function reDraw() {
    console.log('redraw');
}
</script>

<div bind:this={element} bind:clientWidth class:pos-sticky={stickyHeader}  class="dataListHead shad-2" {style}>
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
