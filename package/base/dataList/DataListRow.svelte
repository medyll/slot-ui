
<script>let className = '';
export { className as class };
export let element = undefined;
export let data;
</script>
<div on:datalist:sort:clicked  bind:this={element} class="dataListRow {className}">
    <slot ></slot>
</div>
