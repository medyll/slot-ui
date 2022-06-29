
<script lang="ts">
    	let className = '';
	export { className as class };
	export let element: HTMLDivElement | undefined = undefined;
</script>
<div  bind:this={element} class="dataListRow {className}">
    <slot ></slot>
</div>
