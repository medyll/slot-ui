<script lang="ts">
	import { goto } from '$app/navigation';
	import Divider from '$lib/base/divider/Divider.svelte';
	import ButtonDemo from '$lib/base/button/Button.demo.svelte'; 
	
	import Menu from '$lib/ui/menu/Menu.svelte';
	import Avatar from '$lib/base/avatar/Avatar.svelte';
	import AlertDemo from '$lib/base/alert/AlertDemo.svelte';
	import TabsDemo from '$lib/base/tabs/Tabs.demo.svelte';
	import CartoucheDemo from '$lib/base/cartouche/Cartouche.demo.svelte';
	import BoxDemo from '$lib/base/box/Box.demo.svelte';
	import Select from '$lib/base/select/Select.svelte';
	import Paper from '$lib/base/paper/Paper.svelte';
	import Icon from '$lib/base/icon/Icon.svelte';
	import CardDemo from '$lib/base/card/Card.demo.svelte';
	import Options from '$lib/base/select/Options.svelte';
	import TreeDemo from '$lib/base/tree/Tree.demo.svelte';
	import ListDemo from '$lib/base/list/List.demo.svelte';
	import InputDemo from '$lib/base/input/Input.demo.svelte';
	import DataListDemo from '$lib/base/datalist/DataList.demo.svelte';

	import GrouperDemo from '$lib/data/grouper/Grouper.demo.svelte';
	import Button from '$lib/base/button/Button.svelte';

	const menuData = [
		{ text: 'text 1' },
		{ text: 'text 2' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3', icon: 'i' }
	];

	const optionsData = [
		{ data: {}, text: 'text 1' },
		{ data: {}, text: 'text 2' },
		{ data: {}, text: 'text 3' },
		{ data: {}, text: 'text 3' },
		{ data: {}, text: 'text 3' },
		{ data: {}, text: 'text 3', icon: 'i' }
	];
	const handleClick = (where: string) => (event) => {
		 alert('red')
		goto(where);
	};
</script>

<div class=" w-full h-full overflow-hidden" style="z-index:0">
	<div class="flex-h  h-full overflow-hidden">
		<div class="flex-main pad-4 overflow-auto ">
			<div class="gridDemo">
				<div>
					<Paper density="kind">
						<Select let:option options={optionsData}>
							<Options text={option.text} />
						</Select>
						<Divider />
						<div class="pad-4 dsp-block-inline flex-v flex-align-middle-center">
							<Button primary="explorer" on:click={handleClick('explorer')} />
							<br />
							<Button primary="what" on:click={handleClick('what')} />
							<Button primary="svelte-components" on:click={handleClick('svelte-components')} />
						</div>
					</Paper>
					<Paper density="kind">
						<ButtonDemo />
					</Paper>
					
					<Paper density="kind">
						<Avatar size="small">
							<Icon icon="code" />
						</Avatar>
						<Avatar size="small">
							<Icon icon="code" />
						</Avatar>
					</Paper>
					<Paper density="kind">
						<TabsDemo />
					</Paper>
					<Paper density="kind">
						<CartoucheDemo />
					</Paper>
					<Paper density="kind">
						<AlertDemo />
					</Paper>
				</div>
				<div>
					<Paper density="kind">
						<InputDemo />
					</Paper>
					<Paper density="kind">
						<BoxDemo />
					</Paper>
					<Paper>
						<Menu menuList={menuData} />
					</Paper>
					<Paper>
						<ListDemo />
					</Paper>
				</div>
				<div>
					<Paper density="kind">
						<DataListDemo />
					</Paper>
					<Paper density="kind">
						<CardDemo />
					</Paper>
					<Paper density="kind">
						<TreeDemo />
					</Paper>
					<Paper density="kind">
						<GrouperDemo />
					</Paper>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.gridDemo {
		width: 100%;
		display: grid;
		align-items: stretch;
		grid-gap: 32px;
		grid-template-columns: repeat(auto-fill, minmax(30%, auto));
	}
</style>
