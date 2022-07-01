<script>import { dataOp } from '../../engine/utils';
import { getContext, onMount } from 'svelte';
import Icon from '../icon/Icon.svelte';
import Button from '../button/Button.svelte';
import { custom_event } from 'svelte/internal';
const dataListContextStore = getContext('dataListContext');
const inHeader = getContext('dataListHead');
export let element = null;
export let style = undefined;
export let columnId = undefined;
/** if data has been provided, then cell got a fieldName */
export let dataField;
/** set noWrap =true to have ellipsis on cell content*/
export let noWrap = true;
let addStyle;
// if inHeader, then monitor cell
onMount(async () => {
    if (element && dataListContextStore && inHeader) {
        const width = element.offsetWidth + 'px'; // element?.style?.width ?? element?.offsetWidth+'px';
        const index = [...element.parentElement.children].indexOf(element);
        if (columnId) {
            // find header.col by columnId
            if (!dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId')) {
            }
        }
        else if (!dataOp.filterListFirst($dataListContextStore.columns, index, 'index')) {
            // find header.col by index, create uniqid
            columnId = crypto.randomUUID();
            // register colmun in store
            $dataListContextStore.columns.push({ index, columnId, width, dataField });
        }
    }
    if (element && dataListContextStore && !inHeader) {
        const index = [...element.parentElement.children].indexOf(element);
        if (columnId) {
            // find header.col by columnId
            if (!dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId')) {
            }
        }
        else if (dataOp.filterListFirst($dataListContextStore.columns, index, 'index')) {
            // find header.col by index, create uniqid
            columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
        }
    }
    return () => {
        columnId = undefined;
    };
});
/** try and restore columnId on re-mount */
if (!columnId && element && inHeader) {
    const index = [...element.parentElement.children].indexOf(element);
    columnId = dataOp.filterListFirst($dataListContextStore.columns, index, 'index').columnId;
}
const sortState = ['none', 'asc', 'desc'];
$: if (!inHeader &&
    element &&
    columnId &&
    dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId')) {
    if (!element.style.width) {
        element.style.width = dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId').width;
    }
}
const onSort = (columnId, order) => (e) => {
    // find field from index
    if ($dataListContextStore?.config?.isSortable && columnId && dataField) {
        const event = custom_event('datalist:sort:clicked', { field: dataField, order }, { bubbles: true });
        if (element)
            element.dispatchEvent(event);
        // seek index
        const column = dataOp.filterListFirst($dataListContextStore.columns, columnId, 'columnId');
        if (column.dataField) {
            const event = custom_event('datalist:sort:clicked', { field: column.dataField, order }, { bubbles: true });
            if (element)
                element.dispatchEvent(event);
        }
    }
};
$: sorticon =
    $dataListContextStore.sortBy.activeSortByField === dataField
        ? $dataListContextStore?.config?.sortingIcons?.default[sortState.indexOf($dataListContextStore?.sortBy?.activeSortByOrder)]
        : 'dots-horizontal';
$: showChip = $dataListContextStore.sortBy.activeSortByField === dataField;
</script>

<div
	data-sortable={true}
	data-column-id={columnId}
	data-noWrap={noWrap}
	bind:this={element}
	class="dataListCell"
	{style}
>
	{#if inHeader}
		<div class="cellHeader" on:click={onSort(columnId)}>
			<div title={columnId + 'red'} class="cellHeaderContent"><slot /></div>
			{#if dataField && $dataListContextStore?.config?.isSortable}
				<div class="cellHeaderSorter">
					<Button naked iconFamily="mdi" icon={sorticon} {showChip} />
				</div>
			{/if}
		</div>
	{:else}
		<div><slot /></div>
	{/if}
</div>

<style></style>
