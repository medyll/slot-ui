<script lang="ts">
	import type { MenuItemProps } from '$lib/ui/menu/types.js';
	import type { PopperPositionType } from '$lib/ui/popper/types';
	import { popper, type UsePopperProps } from '$lib/ui/popper/usePopper.js';
	import { togglerSource, togglerTarget } from '$lib/uses/toggler';
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Demoer from '$lib/base/demoer/Demoer.svelte';
	import DemoPage from '$lib/base/demoer/DemoPage.svelte';
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
		height: ElementProps['inputHeight'][];
	};

	let paraold: ParameterType = {
		sizes: ['tiny', 'small', 'medium', 'large'],
		height: ['tiny', 'small', 'default', 'large']
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

	let multiple = {
		color: {
			primary: {color:'primary'},
			secondary: {color:'secondary'},
			tertiary: {color:'tertiary'}
		}
	};

	let multipleActions = {
		position: {
			T: {position:'T'},
			TL: {position:'TL'},
			TR: {position:'TR'}, 
			BC: {position:'BC'},
			BL: {position:'BL'},
			BR: {position:'BR'}, 
		}
	};

	let parametersMenu: any = {
		position: {
			type: 'position',
			values: ['TC', 'TL', 'TR','BC','BL','BR']
		}, 
	};

	let parametersStyle: any = {
		color: {
			type: 'color-preset',
			values: ['primary', 'secondary', 'tertiary']
		},
		naked: {
			type: 'boolean',
			values: [true, false]
		},
		contained: {
			type: 'boolean',
			values: [true, false]
		},
		bordered: {
			type: 'boolean',
			values: [true, false]
		},
		link: {
			type: 'boolean',
			values: [true, false]
		}
	};

	let parameters: any = {
		size: {
			type: 'size-preset',
			values: ['tiny', 'small', 'medium', 'default', 'large']
		},
		height: {
			type: 'size-preset',
			values: ['tiny', 'small', 'medium', 'default', 'large']
		},
		density: {
			type: 'density-preset',
			values: ['none', 'tight', 'default', 'medium', 'kind']
		},
		loading: {
			type: 'boolean',
			values: [true, false]
		},
		showChip: {
			type: 'boolean',
			values: [true, false]
		}
	};

	let parametersProps: any = {
		icon: {
			type: 'icon',
			values: ['icon-park-outline:avatar', 'carbon:phone-ip']
		},
		iconSize: {
			type: 'size-preset',
			values: ['tiny', 'small', 'medium', 'default', 'large']
		},
		iconColor: {
			type: 'color',
			values: ['red', 'green', '#564547', 'orange']
		},
		primary: {
			type: 'string',
			values: ['primary 1', 'primary 2']
		},
		secondary: {
			type: 'string',
			values: ['secondary 1', 'secondary 2']
		},
		...parameters
	};

	let componentArgs = {
		icon: 'icon-park-outline:avatar',
		size: 'default',
		iconSize: 'default',
		showChip: false
	};
</script>

<ComponentDemo
	component="Button"
	cite="There were a place where we used to click. You've called it a button, and we clicked yes.<br /> R. Falgt, 1354"
>
	<div class="flex-v gap-medium">
		<DemoPage title="Using slots" component="Button">
			<Demoer {parameters} {componentArgs} let:activeParams>
				<Button {...activeParams}
					>Using slots
					<Icon icon="user" slot="startButtonSlot" />
					<span slot="loadingIconButtonSlot"><Icon icon="loading" rotate /></span>
				</Button>
			</Demoer>
		</DemoPage>
		<DemoPage subTitle="Styling props" component="Button">
			<Demoer parameters={parametersStyle} {multiple} {componentArgs} let:activeParams>
				<Button {...activeParams}
					>Using slots
					<Icon icon="user" slot="startButtonSlot" />
					<span slot="loadingIconButtonSlot"><Icon icon="loading" rotate /></span>
				</Button>
			</Demoer>
		</DemoPage>
		<DemoPage subTitle="Menu buttons" component="Button">
			<Demoer parameters={parametersMenu}  {componentArgs} let:activeParams>  
				
				<Button>
					default action
					<span slot="popper">
						<Menu
							style="max-height:350px;overflow:auto"
							density="default"
						>
							<MenuItem  
								divider={true}
								text="strict"
							>
								menu
							</MenuItem>
							<MenuItem data={{ some: 'data' }} text="strict">item</MenuItem>
							<MenuItem data={{ some: 'data' }} text="strict">item</MenuItem>
							<MenuItem data={{ some: 'data' }} text="strict">item</MenuItem>
						</Menu>
					</span>
				</Button>
			</Demoer>
		</DemoPage>
		<DemoPage title="Using props" component="Button">
			<Demoer parameters={parametersProps} {componentArgs} let:activeParams>
				<Button {...activeParams}>Using props</Button>
			</Demoer>
		</DemoPage>
		<DemoPage subTitle="Menu buttons" component="Button">
			<Demoer parameters={parametersMenu}  {componentArgs} let:activeParams>  
				<Button size="medium" usePopper={{ ...usePopper, position: activeParams?.position }}  primary="Menu {activeParams?.position ?? ''}" />
			</Demoer>
		</DemoPage>
	</div> 
</ComponentDemo>
