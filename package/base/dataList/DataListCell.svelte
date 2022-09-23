<script>import { dataOp } from '../../engine/utils.js';
import { getContext, onMount } from 'svelte';
import Button from '../button/Button.svelte';
import { custom_event } from 'svelte/internal';
import { resizer } from '../../uses/resizer/resizer.js';
const dataListContextStore = getContext('dataListContext');
const inHeader = getContext('dataListHead');
const rowContext = getContext('dataListRow');
export let element = null;
export let style = undefined;
/** if data has been provided, then cell got a fieldName and coumnId is defined */
export let field = undefined;
/** typeof the field. Used when exists Datalist.$$props.dataTypes */
export let fieldType = undefined;
export let columnId = field ?? crypto.randomUUID();
/** set noWrap = true to have ellipsis on this cell content*/
export let noWrap = true;
let colIndex = undefined;
let columnsDef = undefined;
if (!$dataListContextStore.columnsDef?.[field ?? columnId]) {
    $dataListContextStore.columnsDef[field ?? columnId] = {};
}
columnsDef = $dataListContextStore.columnsDef?.[field ?? columnId];
onMount(async () => {
    colIndex = element ? [...element.parentElement.children].indexOf(element) : undefined;
    if (inHeader) {
        // set width and style from config if present (with field)
        if (columnsDef?.style || columnsDef?.width) {
            if (columnsDef?.style) {
                element.style = columnsDef.style;
            }
            if (columnsDef?.width) {
                element.style.width = columnsDef.width;
                element.style.maxWidth = columnsDef.width;
                element.style.minWidth = columnsDef.width;
            }
        }
        else {
            // find header.col by index
            colIndex = [...element.parentElement.children].indexOf(element);
        }
        // register HTML element for reference
        columnsDef.htmlElement = element;
        columnsDef.field = field ?? columnId;
    }
    return () => {
        columnId = undefined;
    };
});
const sortState = ['none', 'asc', 'desc'];
$: sorticon =
    $dataListContextStore.sortBy.activeSortByField === field
        ? $dataListContextStore?.config?.sortingIcons?.default[sortState.indexOf($dataListContextStore?.sortBy?.activeSortByOrder)]
        : 'dots-horizontal';
$: showChip = $dataListContextStore.sortBy.activeSortByField === field;
$: width =
    $dataListContextStore?.columnsDef?.[field ?? columnId]?.htmlElement?.offsetWidth + 'px';
$: if (element &&
    !inHeader &&
    $dataListContextStore?.columnsDef?.[field ?? columnId]?.htmlElement) {
    element.style.width = width;
    element.style.maxWidth = width;
    element.style.minWidth = width;
}
$: if (Boolean(element) && !inHeader && !field) {
    const field = Object.keys($dataListContextStore.columnsDef)[colIndex];
    const fieldDef = $dataListContextStore.columnsDef[field];
    const widthHtml = fieldDef.htmlElement.offsetWidth + 'px';
    element.style.width = widthHtml;
    element.style.maxWidth = widthHtml;
    element.style.minWidth = widthHtml;
}
const onSort = (columnId, order) => {
    // find field from index
    if ($dataListContextStore?.config?.isSortable && columnId && field) {
        const event = custom_event('datalist:sort:clicked', { field: field, order }, { bubbles: true });
        if (element)
            element.dispatchEvent(event);
    }
};
// not pure
const useResizer = (node, opt) => {
    if (inHeader)
        resizer(node, opt);
};
function resizeStart() { }
function resizeOn(data) {
    $dataListContextStore.columnsDef[columnId].width = data.detail.width + 'px';
}
function resizeEnd() { }
</script>

<div
	data-sortable={true}
	data-column-id={columnId}
	data-noWrap={noWrap}
	bind:this={element}
	class="dataListCell"
	use:useResizer
	on:resizer:start={resizeStart}
	on:resizer:resize={resizeOn}
	on:resizer:end={resizeEnd}
	{style}
	{...$$restProps}
>
	{#if inHeader}
		<div
			on:click={() => {
				onSort(columnId);
			}}
			style:width={$dataListContextStore.columnsDef[columnId]?.width}
			class="cellHeader"
		>
			<div class="cellHeaderContent">
				<slot />
			</div>
			{#if field && $dataListContextStore?.config?.isSortable}
				<div class="cellHeaderSorter">
					<Button naked iconFamily="mdi" icon={sorticon} {showChip} />
				</div>
			{/if}
		</div>
	{:else}
		<slot fieldData={$rowContext?.data ?? {}} />
	{/if}
</div>
