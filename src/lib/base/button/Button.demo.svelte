<script lang="ts">
	import type { MenuItemProps } from '$lib/ui/menu/types';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	import type { ElementProps } from 'src/types';
	import Box from '../box/Box.svelte';
	import Debug from '../debug/Debug.svelte';
	import Icon from '../icon/Icon.svelte';
	import Button from './Button.svelte';
	import ButtonMenu from './ButtonMenu.svelte';

	let loading = true;
	let showChip = true;

	type ParameterType = {
		sizes: ElementProps['sizeType'][];
		buttonHeight: ElementProps['buttonHeight'][];
	};

	let parameters: ParameterType = {
		sizes: ['tiny', 'small', 'medium', 'large'],
		buttonHeight: ['tiny', 'small', 'default', 'large']
	};

	const menuData: MenuItemProps[] = [
		{ text: 'text 1' },
		{ text: 'text 2' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3', icon: 'i' }
	];

	const usePopper: UsePopperProps = {
		component: Box,
		componentProps: {
			title: 'title box',
			content: 'content' 
		}
	};
</script>

<div class="flex-v gap-large">
	<div><Button>default button</Button></div>
	<div class="flex-h gap-tiny">
		<span on:click={() => (showChip = !showChip)}> toggle chip</span>
		<Button bind:showChip>with chip</Button>
	</div>
	<div>
		<div class="flex-h gap-tiny">
			<div>
				<Button {usePopper} primary="action button" />
			</div>
			<div>
				<Button primary="action button">
					<span use:popper={usePopper} slot="actionIcon">
						<Icon icon="chevron-down" />
					</span>
				</Button>
			</div>
			<div>
				<Button primary="action button">
					<span slot="actionIcon">-</span>
					<span slot="popper"><Debug /></span>
				</Button>
			</div>
		</div>
	</div>
	<div>
		<span on:click={() => (showChip = !showChip)}> toggle chip</span>
		<Button bind:showChip>with chip</Button>
	</div>
	<div class="flex-h flex-wrap gap-small">
		{#each parameters.sizes as size}
			<div class="flex-v gap-small">
				<div>size {size}</div>
				<div><Button nowrap={true} {size}>{size}</Button></div>
			</div>
		{/each}
	</div>
	<div class="flex-h flex-wrap gap-small">
		{#each parameters.buttonHeight as height}
			<div class="flex-v gap-small">
				<div>height {height}</div>
				<div><Button nowrap={true} {height}>...</Button></div>
			</div>
		{/each}
	</div>
	<div>
		<span on:click={() => (loading = !loading)}> toggle loading</span>
		<div class="flex-h gap-tiny">
			<Button bind:loading>loading button</Button>
			<Button height="large" bind:loading>
				<span slot="loadingIconButtonSlot"><Icon icon="spin" class="fa fa-spin" /></span>
				loading button</Button
			>
		</div>
	</div>
	<div>
		<div class="flex-h">
			<Button class="w-medium">
				<svelte:fragment slot="startButtonSlot">
					<Icon icon="user" />
				</svelte:fragment>
				with icon
			</Button>
			<Button size="tiny">
				<Icon icon="user" />
			</Button>
		</div>
	</div>
	<div class="flex-v gap-small">
		<div>seconday text</div>
		<div><Button primary="vall" secondary="some secondary <br /> test here ;)" /></div>
	</div>
	<ButtonMenu {menuData}>with menu</ButtonMenu>
</div>
