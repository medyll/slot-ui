<script lang="ts">
	import ComponentDemo from '$lib/_components/ComponentExample.svelte';
	import Icon from '../icon/Icon.svelte';
	import Rating from './Rating.svelte';
	import Demoer from '../demoer/Demoer.svelte';
	import DemoPage from '../demoer/DemoPage.svelte';

	const ww = `<Rating scored={2}>
			<Icon icon="star" />
			<Icon slot="scoredSlot" icon="minus" />
		</Rating>`;
	const ww2 = `<Rating defaultIcon="minus" scoredIcon="plus" scored={3} />`;

	let parameters: any = {
		ratingBase: {
			type: 'number',
			values: [4, 5, 10]
		},
		scored: {
			type: 'number',
			values: [1, 3, 5, 10]
		},
		defaultIcon: {
			type: 'icon',
			values: ['ant-design:star-outlined', 'minus']
		},
		scoredIcon: {
			type: 'icon',
			values: ['ant-design:star-filled', 'minus']
		}
	};

	let componentArgs = {
		scored: 2,
		defaultIcon: 'ant-design:star-outlined',
		scoredIcon: 'ant-design:star-filled'
	};
</script>

<ComponentDemo
	component="Rating"
	cite="You'll never know that you've got a score, unless come the day when you see the other's ones.<br/> S. Roch, 1824"
>
	<div class="flex-v gap-large">
		<DemoPage title="Using slots" component="Rating" code={ww}>
			<Demoer {parameters} {componentArgs} let:activeParams>
				<Rating {...activeParams}>
					<Icon icon={activeParams.defaultIcon} />
					<Icon slot="scoredSlot" icon={activeParams.scoredIcon} />
				</Rating>
			</Demoer>
		</DemoPage>
		<DemoPage title="Using props" component="rating" code={ww2}>
			<Demoer {parameters} {componentArgs} let:activeParams>
				<Rating {...activeParams} />
			</Demoer>
		</DemoPage>
	</div>
</ComponentDemo>
