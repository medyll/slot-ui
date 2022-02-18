<script lang="ts">
	import { goto } from '$app/navigation';
	import Divider from '$lib/vendor/divider/Divider.svelte';
	import ButtonPanel from '$lib/vendor/button/ButtonPanel.svelte';
	import Menu from '$lib/vendor/menu/Menu.svelte';
	import Avatar from '$lib/vendor/avatar/Avatar.svelte';
	import Alert from '$lib/vendor/alert/Alert.svelte';
	import { draggable } from '@neodrag/svelte';

	const menuData = [
		{ text: 'text 1' },
		{ text: 'text 2' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3' },
		{ text: 'text 3', icon: 'i' }
	];

	const handleClick = (where: string) => (event) => {
		goto(where);
	};
</script>

<div style="z-index:0" class="pos-abs w-full h-full overflow-hidden pad-8">
	<div class="flex-h">
		<div>
			<Avatar size="small" />
			<Divider />
			<div class="pad-4 dsp-block-inline flex-h flex-align-middle">
				<button on:click={handleClick('explorer')}> explorer</button>
				<button on:click={handleClick('what')}> what</button>
			</div>
			<ButtonPanel actionComponent={Menu} actionComponentProps={{ menuList: menuData }}>
				button
			</ButtonPanel>
		</div>
		<div class="flex-main pad-4 overflow-auto">
			<Alert level="success" message="message here">Simple alert</Alert>
			<Alert level="info" message="message here">Simple alert</Alert>
			<Alert level="error" message="message here">Simple alert<button slot="buttonZoneSlot" data-close>button</button></Alert>
			<Alert level="warning" message="message here">Simple alert</Alert>
			<Alert level="alert" message="message here">Simple <br />alert</Alert>
			<Alert level="discrete" message="message here">Simple alert</Alert>
			<br /> 
			<Alert message="message here">
				alert red
				<div slot="messageSlot">message here</div>
				<button slot="buttonZoneSlot" data-close>button</button>
			</Alert>
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
