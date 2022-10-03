<script>import { dataOp } from "../../engine/utils.js";
import { getContext, onMount, tick } from "svelte/internal";
import Button from "../button/Button.svelte";
import { custom_event } from "svelte/internal";
import { resizer } from "../../uses/resizer/resizer.js";
import { error } from "@sveltejs/kit";
import Icon from "../icon/Icon.svelte";
import Chipper from "../chipper/Chipper.svelte";
const dataListContext = getContext("dataListContext");
const inHeader = getContext("dataListHead");
const rowContext = getContext("dataListRow");
export let element = undefined;
export let style = undefined;
/** if data has been provided, then cell got a fieldName and coumnId is defined */
export let field = undefined;
/** typeof the field. Used when exists Datalist.$$props.dataTypes */
export let fieldType = undefined;
export let columnId = field ?? crypto.randomUUID();
/** set noWrap = true to have ellipsis on this cell content*/
export let noWrap = true;
/** title */
export let title = undefined;
let colIndex;
let minWidth = "114px";
onMount(async () => {
    // if inHeader take the width from
    // - the columns and dataField :  set it to the element
    // - the columns and element index :  set it to the element
    // - the element with : don't do nothing, but should ! throw error ?
    if (inHeader) {
        colIndex = element
            ? [...(element.parentElement?.children ?? [])].indexOf(element)
            : -1;
        if ($dataListContext.hasColumnsProps && field) {
            // console.log('hasColumnsProps && field');
            if (!$dataListContext.columns[field]) {
                await tick();
                // console.log(0);
                createColumnsDef(element, field, colIndex);
            }
            if (!$dataListContext.columns[field]?.width) {
                await tick();
                // console.log(field, element.offsetWidth);
                $dataListContext.columns[field].width = element.offsetWidth + "px";
            }
        }
        else if ($dataListContext.hasColumnsProps) {
            await tick();
            // console.log(2);
            // grab and declare field from data
            field = getAutoFields($dataListContext.data)[colIndex];
        }
        else if (field) {
            // console.log(3);
            // throw new Error('props.field found without column declaration : '+field);
            createColumnsDef(element, field, colIndex);
        }
        else {
            // console.log(4);
            // create a dummy field for reference
            createColumnsDef(element, crypto.randomUUID(), colIndex);
        }
    }
    return () => {
        columnId = undefined;
    };
});
const createColumnsDef = async (element, field, index) => {
    if (!element)
        return;
    await tick();
    $dataListContext.columns[field] = {
        field,
        style: element.getAttribute("style") ?? "",
        width: element.offsetWidth + "px",
        order: Boolean(element.style?.order) ? eval(element.style.order) : index,
        index: index,
        columnId: field,
    };
    $dataListContext.hasColumnsProps = true;
};
const updateColumnsDef = async (field, payload) => {
    await tick();
    $dataListContext.columns[field] = {
        ...$dataListContext.columns[field],
        ...payload,
    };
};
/**
 * used if no columns and no props.field
 * @param data
 */
const getAutoFields = (data) => {
    return Object.keys(data[0]);
};
const onSort = (field) => {
    const event = custom_event("datalist:sort:clicked", { field }, { bubbles: true });
    if (element)
        element.dispatchEvent(event);
};
// not pure
const useResizer = (node, opt) => {
    if (inHeader)
        resizer(node, opt);
};
function resizeStart() { }
async function resizeOn(data) {
    await tick();
    $dataListContext.columns[field].width = data.detail.width + "px";
}
function resizeEnd() { }
const sortState = ["none", "asc", "desc"];
let sorticon;
let showChip;
let timerWidth;
let finalWidthStyle = "";
$: if (inHeader) {
    sorticon =
        $dataListContext.sortBy.activeSortByField === field
            ? $dataListContext?.config?.sortingIcons?.default[sortState.indexOf($dataListContext?.sortBy?.activeSortByOrder)]
            : "mdi:dots-horizontal";
    showChip = $dataListContext.sortBy.activeSortByField === field;
}
/* $: if ($dataListContext.columns[field].width) {
  const w = $dataListContext.columns[field].width;
  finalWidthStyle = `min-width:${w};width:max-width:${w};`;
} */
</script>

{#if inHeader}
  <div
    bind:this={element}
    data-sortable={true}
    data-column-id={columnId}
    data-noWrap={noWrap}
    class="dataListCell cellDimensions"
    use:useResizer
    on:resizer:start={resizeStart}
    on:resizer:resize={resizeOn}
    on:resizer:end={resizeEnd}
    style="{style ??
      $dataListContext.columns[field]?.headerStyle ??
      $dataListContext.columns[field]?.style};}"
    style:width={$dataListContext.columns[field]?.width ?? minWidth}
    style:minWidth={$dataListContext.columns[field]?.width ?? minWidth}
    style:maxWidth={$dataListContext.columns[field]?.width ?? minWidth}
    {...$$restProps}>
    <div on:click={() => onSort(field)} class="cellHeader">
      <div class="cellHeaderContent">
        <slot />
      </div>
      {#if field && $dataListContext?.config?.isSortable}
        <div class="cellHeaderSorter" title={sorticon}>
          <Chipper
            class="pad"
            {showChip}
            position={showChip &&
            $dataListContext.sortBy?.activeSortByOrder === "desc"
              ? "top"
              : "bottom"}>
            <Icon naked icon={sorticon} />
          </Chipper>
          <!-- <Icon naked icon={sorticon} {showChip} /> -->
          <!-- <Button naked icon={sorticon} {showChip} /> -->
        </div>
      {/if}
    </div>
  </div>
  <!-- <div style="height:900px;margin-top:3rem" class="border-3" /> -->
{:else}
  <div
    bind:this={element}
    data-column-id={columnId}
    data-noWrap={noWrap}
    class="dataListCell cellDimensions"
    {style}
    {...$$restProps}
    style:width={$dataListContext.columns[field]?.width ?? minWidth}
    style:minWidth={$dataListContext.columns[field]?.width ?? minWidth}
    style:maxWidth={$dataListContext.columns[field]?.width ?? minWidth}
    {title}>
    <slot fieldData={$rowContext?.data?.[field] ?? {}} />
  </div>
{/if}

<style></style>
