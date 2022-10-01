<svelte:options accessors={true} />

<script>import sanitizeHtml from 'sanitize-html';
import { current_component, custom_event, getContext, get_current_component, null_to_empty, prevent_default, setContext } from 'svelte/internal';
import { writable } from 'svelte/store';
import DataListCell from './DataListCell.svelte';
import { dataOp } from '../../engine/utils.js';
import { createEventForwarder } from '../../engine/engine.js';
let className = '';
export { className as class };
export let element = undefined;
const forwardEvents = createEventForwarder(get_current_component());
export let data;
export let style = undefined;
const dataStore = writable({ data });
setContext('dataListRow', dataStore);
const dataListContext = getContext('dataListContext');
function handleClick(item) {
    const event = custom_event('datalist:click', item, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
}
function handleSelect(item) {
    const event = custom_event('datalist:select', item, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
}
function fieldOrFunction(item, field, defaultValue) {
    const resolved = dataOp.resolveDotPath(item, field);
    return typeof resolved === 'function' ? resolved(item) : resolved;
}
function checkGetter(columns, field, data) {
    const ret = columns[field]?.getter ? columns[field]?.getter(data) : data[field];
    // console.log(ret, columns[field])
    return sanitizeHtml(ret);
    //  fieldOrFunction(data?.[field], field)
}
$: cssVars = Object.values($dataListContext.columns ?? []).reduce((previous, current, currentIndex) => {
    return `${previous} ${current?.width}`;
}, '--template-columns:');
</script>

<div
	use:forwardEvents
	bind:this={element}
	on:datalist:sort:clicked
	on:click={() => {
		if (data) handleClick(data);
		if (data) handleSelect(data);
	}}
	class="dataListRow {className}"
	style="{style};{cssVars}"
>
	{#if $$slots.default}
		<slot />
	{:else if $dataListContext.hasColumnsProps}
		{#each Object.keys($dataListContext.columns) as inItem}
			{@const field = $dataListContext.columns[inItem].field}
			{@const final = checkGetter($dataListContext.columns, field, data)}
			<!--  fieldOrFunction(data?.[field], field) -->
			<DataListCell title={final} {field}>
				{@html null_to_empty(
					sanitizeHtml(checkGetter({ ...$dataListContext.columns }, field, data))
				)}
			</DataListCell>
		{/each}
	{:else}
		{#each Object.keys(data) as inItem}
			<DataListCell field={inItem}>
				<slot />
			</DataListCell>
		{/each}
	{/if}
</div>


<style>.dataListRow {
  display: grid;
  grid-template-columns: var(--template-columns);
  grid-auto-columns: min-content;
}</style>
