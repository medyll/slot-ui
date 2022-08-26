<script>import { custom_event, setContext } from 'svelte/internal';
import { writable } from 'svelte/store';
let className = '';
export { className as class };
export let element = undefined;
export let data;
const dataStore = writable({ data });
setContext('dataListRow', dataStore);
function handleClick(item) {
    const event = custom_event('datalist:click', item, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
}
function handleSelect(item) {
    const event = custom_event('datalist:click', item, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
}
</script>

<div
	on:datalist:sort:clicked
	on:click={() => {
		if (data) handleClick(data);
		if (data) handleSelect(data);
	}}
	bind:this={element}
	class="dataListRow {className}"
	 
>
	<slot />
</div>
