<script lang="ts">
	import DataList from '$lib/base/dataList/DataList.svelte';
	import DataListRow from '$lib/base/dataList/DataListRow.svelte';
	import DataListCell from '$lib/base/dataList/DataListCell.svelte';
	import DataListHead from '$lib/base/dataList/DataListHead.svelte';
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import appSchemeData from '../../../demoData/appscheme.json';
	import type { DataCellType } from './types';
	import Button from '$lib/base/button/Button.svelte';
	import Popper from '$lib/ui/popper/Popper.svelte';

	let data = [...Array(50)].map((caches, index: number) => {
		return {
			id: index,
			index,
			name: 'name ' + index,
			lastName: 'lastName ' + index,
			group: 'group-' + getRandomInt(4),
			groupedArrayOfObjects: [
				{ name: 'nested' + getRandomInt(4) },
				{ name: 'nested' + getRandomInt(4) }
			],
			groupObject: { group: 'group-' + getRandomInt(4) }
		};
	});

	let columns: Record<string, DataCellType> = {
		index: { field: 'index', width: '90px' },
		name: { field: 'name' },
		lastName: {
			field: 'lastName',
			getter: (data: any) => {
				return data.lastName + ' - getter';
			}
		},
		group: { field: 'group' }
	};

	let columnsAppscheme: Record<string, DataCellType> = {
		iconAppscheme: { field: 'iconAppscheme', width: '80px' },
		nomAppscheme: { field: 'nomAppscheme', width: '190px' },
		nomAppscheme_base: { field: 'nomAppscheme_base' },
		nomAppscheme_type: { field: 'nomAppscheme_type', style: 'flex:1' }
	};

	let columnsAppschemeFields: Record<string, DataCellType> = {
		iconAppscheme_field: { field: 'iconAppscheme_field', width: '80px' },
		nomAppscheme_field: { field: 'nomAppscheme_field', width: '190px' },
		nomAppscheme_field_type: { field: 'nomAppscheme_field_type' },
		nomAppscheme_field_group: { field: 'nomAppscheme_field_group', style: 'flex:1' }
	};

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	let isOpen = false;;
</script>

<ComponentDemo
	component="DataList"
	cite="Those who call they tables are the same who name stones as chairs. Reality is above : datalist
is a datalist table <br /> B. Franklin, 1854"
>
	<div class="flex-v gap-medium">

		<!-- <h5>Automatique datalist, without columns definitions</h5>
		<div class="what   pos-rel  pad">
			<DataList style="height:150px;width:350px;overflow:auto;" {data}>
				<svelte:fragment slot="head">
					<DataListHead>
						<DataListCell field="index">index</DataListCell>
						<DataListCell field="name">name</DataListCell>
						<DataListCell field="lastName" style="flex:1">lastName</DataListCell>
					</DataListHead>
				</svelte:fragment>
			</DataList>
		</div> -->
		<h5>grouped Datatable</h5>
		<!-- groupByField="group" -->
		<div class="what   pos-rel   pad" style="height:550px;overflow:auto;">
			<DataList
				style="max-height:250px;overflow:auto;"
				{columns}
				{data}
				let:item
				virtualizer={true}
				groupByField="group"
			>
				<DataListHead slot="head">
					<DataListCell field="index">index</DataListCell>
					<DataListCell field="name">name</DataListCell>
					<DataListCell field="lastName">group</DataListCell>
					<DataListCell field="group" style="flex:1">group</DataListCell>
				</DataListHead>
				<!-- <DataListRow data={item}>
					<DataListCell field="index">{item.index}</DataListCell>
					<DataListCell field="name">{item.name}</DataListCell>
					<DataListCell field="lastName">121512</DataListCell>
				</DataListRow> -->
			</DataList>
		</div>
		<!-- <h5>appSchemeData</h5>
		<div style="width:100%;" class="what pad-1   pos-rel overflow-auto">
			<DataList
				style="max-height:150px;overflow:auto;"
				groupByField="nomAppscheme_type"
				data={appSchemeData.RECORDS}
				columns={columnsAppscheme}
				groupByOptions={{
					showMainHeader: true
				}}
				on:datalist:click={() => {}}
			>
				<svelte:fragment slot="head">
					<DataListHead>
						<DataListCell field="iconAppscheme">icon</DataListCell>
						<DataListCell field="nomAppscheme">nom</DataListCell>
						<DataListCell field="nomAppscheme_base">group</DataListCell>
						<DataListCell field="nomAppscheme_type">type</DataListCell>
					</DataListHead>
				</svelte:fragment>
			</DataList>
		</div> -->
		<!-- <h5>Automatique datalist slotted</h5>
		<div style="height:350px;width:350px;" class="what   pos-rel overflow-hidden">
			<DataList {data} on:datalist:click={() => {}}>
				<svelte:fragment slot="head">
					<DataListHead>
						<DataListCell field="index">index</DataListCell>
						<DataListCell field="name">name</DataListCell>
						<DataListCell field="lastName" style="flex:1">lastName</DataListCell>
					</DataListHead>
				</svelte:fragment>
			</DataList>
		</div> -->
		<!-- <h5>Full slot datalist</h5>
		<div style="height:350px;" class="what   pos-rel overflow-auto">
			<DataList {data} let:item>
				<DataListHead slot="head">
					<DataListCell field="index" style="width:50px;">index</DataListCell>
					<DataListCell field="name" style="width:50px;">name</DataListCell>
					<DataListCell field="lastName" style="width:100px">lastName 50%</DataListCell>
				</DataListHead>
				<DataListRow data={item}>
					<DataListCell>{item.index}</DataListCell>
					<DataListCell>{item.name}</DataListCell>
					<DataListCell>121512</DataListCell>
				</DataListRow>
			</DataList>
		</div> -->
	</div>
</ComponentDemo>

<style lang="scss">
	.what {
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
	}
</style>
