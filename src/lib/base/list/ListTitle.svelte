<script lang="ts">
	import type { ElementProps } from 'src/types';
import Icon from '../icon/Icon.svelte';

	export let icon: string;
	/** displayed as H5*/
	export let primary: string | undefined = undefined;
	/** secondary title */
	export let secondary: string | undefined = undefined;
	export let action: string;

	export let density: ElementProps['density'] = 'default';
</script>

<li class="listItemTitle density-{density}">
	{#if icon || $$slots.icon}
		<div class="listItemIcon">
			<slot name="icon" >
                <Icon {icon} />
            </slot>
		</div>
	{/if}
	<div class="listItemContent">
		{#if primary || $$slots.primary}
			<h5>
				<slot name="primary">{primary}</slot>
			</h5>
		{/if}
		{#if secondary || $$slots.secondary}
			<div>
				<slot name="secondary">{secondary}</slot>
			</div>
		{/if}
	</div>
	<div class="listItemAction">
		<slot name="action" />
	</div>
</li>

<!--i love slots-->
<slot name="iloveslots" />
<!--i love slot more but with less-->
<slot:iloveslots />

<!--
    local instead of global
    means that the sheet is shared at directory level
    useful for compound components,
    css is for cascading
-->
<style lang="scss" global>
	@import 'List';
</style>
