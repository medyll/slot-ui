<script lang="ts">
	import type { MenuItemProps } from '$lib/ui/menu/types';
	import type { PopperPositionType } from '$lib/ui/popper/types';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper.js';
	import { togglerSource, togglerTarget } from '$lib/uses/toggler';
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import type { ElementProps } from '$typings/index.js';
	import Box from '../box/Box.svelte';
	import Debug from '../debug/Debug.svelte';
	import Icon from '../icon/Icon.svelte';
	import Button from './Button.svelte';
	import Menu from '$lib/ui/menu/Menu.svelte';
	import MenuItem from '$lib/ui/menu/MenuItem.svelte';

	let loading = true;
	let showChip = true;

	type ParameterType = {
		sizes: ElementProps['sizeType'][];
		buttonHeight: ElementProps['inputHeight'][];
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

	const variants: string[] = ['link', 'contained', 'bordered'];

	const usePopper: UsePopperProps = {
		component: Debug,
		componentProps: {
			title: 'title box',
			content: 'content'
		}
	};
</script>

<ComponentDemo
	component="Button"
	cite="There were a place where we used to click. You've called it a button, and we clicked yes.<br /> R. Falgt, 1354"
>
	<div class="flex-v gap-medium" use:togglerTarget={{ uid: 'tre' }}>
		<div><Button>default button</Button></div>
		<div class="flex-h gap-medium grid-align-middle">
			<Button bind:showChip>With chip</Button>
			<span on:click={() => (showChip = !showChip)}> toggle chip</span>
		</div>
	</div>
	<div class="flex-h gap-medium">
		<h5 class="w-large">variants</h5>
		<div class="flex-v gap-medium">
			<div>
				<div class="flex-h gap-small">
					{#each variants as variant}
						{@const red = { [variant]: true }}
						<div class="pad-1 flex-v gap-small">
							<div>{variant}</div>
							<div><Button primary={variant} {...{ ...red }} /></div>
						</div>
					{/each}
				</div>
			</div>
			<div>
				{#each variants as variant}
					{@const red = { [variant]: true }}
					<div class="pad-1">
						Combined : {variant}
					</div>
					<div class="flex-h gap-medium">
						{#each variants as variant2}
							{@const red2 = { [variant2]: true }}
							<div>
								<Button primary={variant2} {...{ ...red, ...red2 }} />
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<br />
	<div class="flex-h gap-medium">
		<h5 class="w-large">description buttons</h5>
		<div class="flex-v gap-small">
			<div>
				<Button size="full" primary="vall" secondary="some secondary <br /> test here ;)" />
			</div>
		</div>
	</div>
	<br />
	<div class="flex-h gap-medium">
		<h5 class="w-large">action buttons</h5>
		<div class="flex-v gap-large">
			<span>several forms</span>
			<div class="flex-h gap-medium">
				<div>
					<Button {usePopper} primary="action button" />
					<Button>
						default action
						<span slot="popper">
							<Menu style="max-height:350px;overflow:auto"  on:menu:clicked={(args)=>{console.log('menu clicked',args)}}  density="default">
								<MenuItem on:menu:item:clicked={(args)=>{console.log('menu item clicked',args)}} 
									data={{some:'data'}}
									divider={true} text="strict">
									menu
								</MenuItem>
								<MenuItem data={{some:'data'}} text="strict">
									menu
								</MenuItem>
								<MenuItem data={{some:'data'}} text="strict">
									menu
								</MenuItem>
								<MenuItem data={{some:'data'}} text="strict">
									menu
								</MenuItem>
							</Menu> 
						</span>
					</Button>
				</div>
			</div>
			<div>action's position</div>
			<div class="flex-v gap-large">
				<div class="flex-h flex-wrap gap-large">
					{#each popPos as pos}
						{@const a = { ...usePopper, position: pos }}
						<div>
							<div>{pos}</div>
							<div><Button usePopper={a} primary={pos} /></div>
						</div>
					{/each}
				</div>
				<!-- <div class="flex-v gap-medium">
				<div>On whole button</div>
				<div class="flex-h flex-wrap gap-large">
					{#each popPos as pos}
						{@const a = { ...usePopper, position: pos }}
						<div>
							<div>{pos}</div>
							<div><Button usePopper={a} primary={pos} /></div>
						</div>
					{/each}
				</div>
			</div> -->
				<!-- <div class="flex-v gap-medium">
				<div>On action zone</div>
				<div class="flex-h flex-wrap gap-medium">
					{#each popPos as pos}
						{@const a = { ...usePopper, position: pos }}
						<div>
							<div>{pos}</div>
							<div>
								<Button primary={pos}>
									<div  slot="actionIcon">
										<span use:popper={a} ><Icon icon="chevron-down" /></span>
									</div>
								</Button> 
							</div>
						</div>
					{/each}
				</div>
			</div> -->
			</div>
		</div>
	</div>
	<br />
	<div class="flex-h gap-medium">
		<h5 class="w-large">chip button</h5>
		<div class="flex-h gap-medium flex-align-middle">
			<a on:click={() => (showChip = !showChip)}> toggle chip</a>
			<Button bind:showChip>with chip</Button>
		</div>
	</div>
	<br />
	<div class="flex-h gap-medium">
		<h5 class="w-large">sized with buttons</h5>

		<div class="flex-h flex-wrap gap-medium">
			{#each parameters.sizes as size}
				<div class="flex-v gap-medium">
					<div>size {size}</div>
					<div><Button nowrap={true} {size}>{size}</Button></div>
				</div>
			{/each}
		</div>
	</div>
	<br />
	<div class="flex-h gap-medium">
		<h5 class="w-large">sized height buttons</h5>

		<div class="flex-h flex-wrap gap-small">
			{#each parameters.buttonHeight as height}
				<div class="flex-v gap-small">
					<div>height {height}</div>
					<div><Button nowrap={true} {height}>...</Button></div>
				</div>
			{/each}
		</div>
	</div>
	<br />
	<div class="flex-h  flex-align-middle gap-medium">
		<h5 class="w-large">loading buttons</h5>
		<div>
			<div class="flex-h flex-align-middle gap-medium">
				<a on:click={() => (loading = !loading)}> toggle loading</a>
				<Button bind:loading>loading button</Button>
				<Button on:click={() => (loading = !loading)} height="large" bind:loading>
					<span slot="loadingIconButtonSlot"><Icon icon="spinner" class=" rotate" /></span>
					loading button</Button
				>
			</div>
		</div>
	</div>
	<br />
	<div class="flex-h gap-medium">
		<h5 class="w-large">icon buttons</h5>
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
	</div>
</ComponentDemo>
