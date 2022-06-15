<script lang="ts">
	import type { MenuItemProps } from '$lib/ui/menu/types';
	import type { PopperPositionType } from '$lib/ui/popper/types';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper';
	import type { ElementProps } from 'src/types';
	import Box from '../box/Box.svelte';
	import Debug from '../debug/Debug.svelte';
	import Icon from '../icon/Icon.svelte';
	import Button from './Button.svelte';

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

	const popPos: PopperPositionType[] = ['T', 'TL', 'TR', 'B', 'BL', 'BR'];

	const variants: string[] = [ 'link', 'contained','bordered'];

	const usePopper: UsePopperProps = {
		component: Debug,
		componentProps: {
			title: 'title box',
			content: 'content'
		}
	};
</script>

<div class="flex-v gap-large">
	<h5>default button</h5>
	<div><Button>default button</Button></div>
	<div class="flex-h gap-medium">
		<span on:click={() => (showChip = !showChip)}> toggle chip</span>
		<Button bind:showChip>with chip</Button>
	</div>
	<h5>variants</h5>
	<div>
		{#each variants as variant}
		{@const red = {[variant]:true}}
			<div class="pad-1">
				{variant}
			</div>
			<div class="flex-h gap-medium">
				{#each variants as variant2}
				{@const red2 = {[variant2]:true}}
					<div>
						<Button primary={variant2} {...{...red,...red2}} />						
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<h5>action buttons</h5>
	<div class="flex-v gap-medium">
		<span>several forms</span>
		<div class="flex-h gap-medium">
			<div>
				<Button {usePopper} primary="action button" />
			</div>
			<!-- <div>
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
			</div> -->
		</div>
		<div>action's position</div>
		<div class="flex-v gap-medium">
			<div class="flex-v gap-medium">
				<div>On whole button</div>
				<div class="flex-h flex-wrap gap-medium">
					{#each popPos as pos}
						{@const a = { ...usePopper, position: pos }}
						<div>
							<div>{pos}</div>
							<div><Button usePopper={a} primary={pos} /></div>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex-v gap-medium">
				<div>On action zone</div>
				<div class="flex-h flex-wrap gap-medium">
					{#each popPos as pos}
						{@const a = { ...usePopper, position: pos }}
						<div>
							<div>{pos}</div>
							<div>
								<Button primary={pos}>
									<span use:popper={a} slot="actionIcon">
										<Icon icon="chevron-down" />
									</span>
								</Button>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<h5>chip button</h5>

	<div>
		<span on:click={() => (showChip = !showChip)}> toggle chip</span>
		<Button bind:showChip>with chip</Button>
	</div>
	<h5>sized with buttons</h5>

	<div class="flex-h flex-wrap gap-small">
		{#each parameters.sizes as size}
			<div class="flex-v gap-small">
				<div>size {size}</div>
				<div><Button nowrap={true} {size}>{size}</Button></div>
			</div>
		{/each}
	</div>
	<h5>sized height buttons</h5>

	<div class="flex-h flex-wrap gap-small">
		{#each parameters.buttonHeight as height}
			<div class="flex-v gap-small">
				<div>height {height}</div>
				<div><Button nowrap={true} {height}>...</Button></div>
			</div>
		{/each}
	</div>
	<h5>loading buttons</h5>

	<div>
		<span on:click={() => (loading = !loading)}> toggle loading</span>
		<div class="flex-h gap-tiny">
			<Button bind:loading>loading button</Button>
			<Button height="large" bind:loading>
				<span slot="loadingIconButtonSlot"><Icon icon="spinner" class="fa fa-rotate" /></span>
				loading button</Button
			>
		</div>
	</div>
	<h5>icon buttons</h5>

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
	<h5>description buttons</h5>

	<div class="flex-v gap-small">
		<div><Button primary="vall" secondary="some secondary <br /> test here ;)" /></div>
	</div>
</div>
