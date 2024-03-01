<!--
@deprecated
-->
<script lang="ts">
	import Icon from '$lib/base/icon/Icon.svelte';
	import IconButton from '$lib/base/button/IconButton.svelte';
	import Button from '$lib/base/button/Button.svelte';

	export let onClose: () => void;
	export let hasMenu: any = false;
	export let icon: string | undefined = undefined;
</script>

<div class="titleBar flex-h marg-b-1 pad-1">
	<div class="title flex-main flex-h flex-align-middle">
		<div class="pad-ii-1 text-center">
			<slot name="titleBarIcon">
				<Icon fontSize="small" {icon} />
			</slot>
		</div>
		<div class="flex-main pad-l-1">
			<slot name="titleBarTitle" />
		</div>
	</div>
	{#if hasMenu}
		<div class="">
			<!--<ButtonAction/>-->
		</div>
	{/if}
	{#if Boolean(onClose)}
		<div class="">
			<Button on:click={onClose} naked icon="window-close" size="auto" />
		</div>
	{/if}
</div>

<style global lang="scss">
	.titleBar {
		.title {
			min-height: 34px;
		}

		border-bottom: 1px solid var(--slotui-color-border);
	}
</style>
