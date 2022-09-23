<script lang="ts">
	import DataList from '$lib/base/dataList/DataList.svelte';
	import DataListRow from '$lib/base/dataList/DataListRow.svelte';
	import DataListCell from '$lib/base/dataList/DataListCell.svelte';
	import DataListHead from '$lib/base/dataList/DataListHead.svelte';
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import type { CellType } from './types';

	let data = [...Array(50)].map((caches, index: number) => {
		return { index, name: 'name ' + index, otherName: 'otherName ' + (index % 7) };
	});

	let columns: CellType[] = [
		{ dataField: 'index' },
		{ dataField: 'name' },
		{ dataField: 'otherName' }
	];

	let columnsDef: CellType[] = {
		index: { dataField: 'index' ,width:'190px',style:"color:red;"},
		name: { dataField: 'name',style:'width:auto' },
		otherName: { dataField: 'otherName',width:'auto' }
	};
</script>

<ComponentDemo
	component="DataList"
	cite="Those who call they tables are the same who name stones as chairs. Reality is above : datalist
is a datalist table <br /> B. Franklin, 1854"
>
	<div class="flex-v gap-medium">
		<h5>Automatique datalist</h5>
		<div style="height:350px;width:350px;" class="what   pos-rel overflow-hidden pad-4">
			<DataList {data}>
				<svelte:fragment slot="head">
					<DataListHead>
						<DataListCell dataField="index">index</DataListCell>
						<DataListCell dataField="name">name</DataListCell>
						<DataListCell dataField="otherName" style="flex:1">otherName</DataListCell>
					</DataListHead>
				</svelte:fragment>
			</DataList>
		</div>
		<h5>Automatique datalist slotted</h5>
		<div style="height:350px;width:350px;" class="what   pos-rel overflow-hidden pad-4">
			<DataList {data} on:datalist:click={() => {}}>
				<svelte:fragment slot="head">
					<DataListHead>
						<DataListCell dataField="index">index</DataListCell>
						<DataListCell dataField="name">name</DataListCell>
						<DataListCell dataField="otherName" style="flex:1">otherName</DataListCell>
					</DataListHead>
				</svelte:fragment>
			</DataList>
		</div>
		<h5>Full slot datalist</h5>
		<div style="height:350px;" class="what   pos-rel overflow-auto pad-4">
			<DataList {data} let:item>
				<DataListHead slot="head">
					<DataListCell style="width:50px;">index</DataListCell>
					<DataListCell style="width:50px;">name</DataListCell>
					<DataListCell style="width:100px">otherName 50%</DataListCell>
					<DataListCell style="width:250px">250px</DataListCell>
					<DataListCell style="width:100px ">TitleTitleTitleTitleTitleTitleTitle</DataListCell>
					<DataListCell style="width:auto">Title</DataListCell>
				</DataListHead>
				<DataListRow data={item}>
					<DataListCell>{item.index}</DataListCell>
					<DataListCell>{item.name}</DataListCell>
					<DataListCell>121512</DataListCell>
					<DataListCell>vfbgfbgf</DataListCell>
					<DataListCell>vfbgfbgf</DataListCell>
					<DataListCell>vfbgfbgf</DataListCell>
				</DataListRow>
			</DataList>
		</div>
		<h5>Declarative</h5>
		<div class="what   pos-rel   pad-4">
			<DataList
				style="height:300px!important;max-height:100%;overflow:auto;"
				groupByField="otherName"
				{columnsDef}
				{columns}
				{data}
				let:item
			>
				<!-- <DataListHead slot="head">
					<DataListCell dataField="index" style="width:50px;">index</DataListCell>
					<DataListCell dataField="name" style="width:50px;">name</DataListCell>
					<DataListCell dataField="otherName" style="width:100px">otherName 50%</DataListCell> 
				</DataListHead> -->
				<DataListRow data={item}>
					<DataListCell dataField="index">{item.index}</DataListCell>
					<DataListCell dataField="name">{item.name}</DataListCell>
					<DataListCell dataField="otherName">121512</DataListCell>
				</DataListRow>
			</DataList>
		</div>
	</div>
</ComponentDemo>

<style lang="scss">
	.what {
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
	}
</style>
