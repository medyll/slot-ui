
<script lang="ts">
    	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;

	export let data:any;
</script>
<div on:datalist:sort:clicked  bind:this={element} class="dataListRow {className}">
    <slot ></slot>
</div>
