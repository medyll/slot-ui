<script lang="ts">
	type Props = {
		slot?: Snippet<[typeof Props['slotArgs'] ]>;
		slotArgs: any;
		children?: Snippet;
	};

	let { slot, children, slotArgs } = $props<Props>();
</script>

{#if slot}
	{@render slot(slotArgs)}
{:else if children}
	{@render children(slotArgs)}
{/if}
