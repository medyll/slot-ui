
<script>let className = '';
export { className as class };
export let element = undefined;
</script>
<div  bind:this={element} class="dataListRow {className}">
    <slot ></slot>
</div>
