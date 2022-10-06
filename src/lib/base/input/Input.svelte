<svelte:options accessors />
<script lang="ts">
	import { createEventForwarder } from '$lib/engine/engine';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	import type { ElementProps } from '$typings/index.js';
	import { compute_slots, get_current_component, text } from 'svelte/internal';
	import Button from '../button/Button.svelte';
	import Icon from '../icon/Icon.svelte';

	let inputType = 'text';
	export { inputType as type };

	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());

	export let style = '';

	/** icon as a parameter*/
	export let icon: string | undefined = undefined;
	/** icon as a parameter*/
	export let iconColor: string = '#666';
	/** icon as a parameter*/
	export let endIcon: string | undefined = undefined;
	/** icon color as a parameter*/
	export let endIconColor: string = '#666';
	/** paramters for usePopper */
	export let usePopper: UsePopperProps | undefined = undefined;
	/** with of the input using  presets */
	export let size: ElementProps['sizeType'] | 'full' = 'auto';
	/** height of the input, using preset values */
	export let height: string = 'default';
	/** has no border */
	export let borderless: boolean = false;
	/** has no border */
	export let transparent: boolean = false;

	export let value: any;

	let niceIconStyle = '';

	niceIconStyle += icon || $$slots.startInputSlot ? 'padding-left:2.2rem;' : '';
	niceIconStyle += endIcon || $$slots.endInputSlot ? 'padding-right:2.2rem;' : '';

	$: if (usePopper) {
		usePopper.disabled = false;
		usePopper.parentNode = element;
	} else {
		usePopper = { disabled: true };
	}
</script>

{#if icon || endIcon  || inputType === 'search' || $$slots.startInputSlot || $$slots.endInputSlot}
	<div style="position:relative;display:block">
		{#if icon || $$slots.startInputSlot}
			<div class="inpuStart">
				<slot name="startInputSlot">
					<Icon {icon} style="max-width:100%;max-height:100%;color:{iconColor}" />
				</slot>
			</div>
		{/if}
		{#if $$slots.endInputSlot || endIcon || inputType === 'search'}
			<div class="inpuEnd">
				{#if $$slots.endInputSlot || endIcon}
					<slot name="endInputSlot">
						<Icon icon={endIcon} style="max-width:100%;max-height:100%;color:{endIconColor}" />
					</slot>
				{/if}
				{#if inputType === 'search'}
					<Button on:click={()=>{value=null}} disabled={!value?.length} naked icon="close-circle-outline" iconFamily="mdi" />
				{/if}
			</div>
		{/if}
		<input
			bind:value
			bind:this={element}
			use:forwardEvents
			use:popper={usePopper}
			type="text"
			class="w-{size} {className}"
			data-height={height}
			data-width={size}
			{borderless}
			style={niceIconStyle + ';' + style}
			{...$$restProps}
		/>
	</div>
{:else}
	<input
		bind:value
		bind:this={element}
		use:forwardEvents
		use:popper={usePopper}
		type="text"
		class="w-{size} {className}"
		data-height={height}
		{borderless}
		{style}
		{...$$restProps}
	/>
{/if}

<style lang="scss">
	@import '../../../lib/styles/presets.scss';
	input {
		border: 1px solid var(--theme-color-foreground-alpha);
		// border: 1px solid rgba(208, 191, 151, 0.5);
		border-bottom: var(--slotui-border-bottom-size, 2px) solid
			var(--theme-color-primary-darker, rgb(208, 191, 151));
		border-radius: var(--slotui-input-radius, 4px);
		padding: var(--slotui-input-padding, 0.5rem);
		box-shadow: inset 0px 0px 3px 1px rgba(51, 51, 51, 0.1);
		background-color: var(--theme-color-background-alpha-low);
		color: var(--theme-color-text);
		/* background-color: rgba(59, 59, 59, 0.99);
		color: white; 
		height: 2.5rem;*/
		padding: var(--slotui-input-padding, 0 0.5rem);
		box-sizing: border-box;
		&:hover {
			border-color: var(--theme-color-foreground);
		}
		[error] {
			border-bottom: red;
		}
		@include input-sizes-presets;
		@include ui-width-presets;
	}

	.inpuStart {
		position: absolute;
		height: 100%;
		max-height: 100%;
		width: 24px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: var(--slotui-input-radius, 4px); 
	}
	.inpuEnd {
		position: absolute;
		right: 0;
		height: 100%;
		max-height: 100%;
		width: 24px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		// background-color: rgba(255, 255, 255, 0.1);
		border-radius: var(--slotui-input-radius, 4px);
	}
</style>
