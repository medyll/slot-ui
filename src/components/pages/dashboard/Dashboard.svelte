<script lang="ts">
	import { goto } from '$app/navigation';
	import Divider from '../../vendor/divider/Divider.svelte';
	import ButtonPanel from '../../vendor/button/ButtonPanel.svelte';
	import Menu from '../../vendor/menu/Menu.svelte';
	import Icon from '../../ui/icon/Icon.svelte';
	import Avatar from '../../vendor/avatar/Avatar.svelte';

	const menuData = [
		{ text: 'text 1' },
		{ text: 'text 2' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3', icon: 'i' }
	];

	const handleClick = (where: string) => (event: PointerEvent) => {
		goto(where);
	};
</script>

<div style="z-index:0" class="pos-abs w-full h-full overflow-hidden pad-8">
	<div class="flex-h">
		<div>
			<Avatar size="small"  />
			<Divider />
			<div class="pad-4 dsp-block-inline flex-h flex-align-middle">
				<button on:click={handleClick('explorer')}> explorer</button>
				<button on:click={handleClick('what')}> what</button>
			</div>
			<ButtonPanel actionComponent={Menu} actionComponentProps={{ menuList: menuData }}
				>button</ButtonPanel
			>
		</div>
		<div class="flex-main pad-4 overflow-auto">
			<div class="gridIcon">
				{#each [...Array(20)] as key, val}
					<div class="buttonPole dsp-inline" style="width:130px" />
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.gridIcon {
		width: 100%;
		display: grid;
		align-items: center;
		grid-gap: 32px;
		grid-template-columns: repeat(auto-fill, minmax(130px, auto));
	}

	.buttonPole {
		border-radius: 4px;
		background-color: rgba(#555, 0.2);
		border: 1px solid rgba(208, 191, 151, 0.1);
		padding: 0.5rem;
		height: 120px;
	}
</style>
