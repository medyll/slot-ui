<script lang="ts">
	import DataList from '$lib/base/dataList/DataList.svelte';
	import DataListRow from '$lib/base/dataList/DataListRow.svelte';
	import DataListCell from '$lib/base/dataList/DataListCell.svelte';
	import DataListHead from '$lib/base/dataList/DataListHead.svelte';

	let data = [...Array(70000)].map((caches, index: number) => {
		return { index, name: 'name '+index, otherName: 'otherName '+index };
	});
</script>

<div class="flex-v gap-large">
	<h5>{'<DataList />'}</h5>
	<cite
		><p>
			Those who call they tables are the same who name stones as chairs. Reality is above : datalist
			is a datalist table <br /> B. Franklin, 1854
		</p></cite
	>

	<div class="flex-v gap-medium">
		<h5>Automatique datalist</h5>
		<div style="height:350px;" class="what   pos-rel overflow-hidden pad-4">
			<DataList {data} let:item>
				<DataListHead slot="head">
					<DataListCell  dataField="index">index</DataListCell>
					<DataListCell  dataField="name">name</DataListCell>
					<DataListCell  dataField="otherName"style="flex:1">otherName</DataListCell>
				</DataListHead>
			</DataList>
		</div>
		<h5>Full slot datalist</h5>
		<div style="height:350px;" class="what   pos-rel overflow-hidden pad-4">
			<DataList {data} let:item>
				<DataListHead slot="head">
					<DataListCell style="width:50px;">index</DataListCell>
					<DataListCell dataField="name" style="width:50px;">name</DataListCell>
					<DataListCell style="width:100px">otherName 50%</DataListCell>
					<DataListCell style="width:250px">250px</DataListCell>
					<DataListCell style="width:100px ">TitleTitleTitleTitleTitleTitleTitle</DataListCell>
					<DataListCell style="width:100px">Title</DataListCell>
				</DataListHead>
				<DataListRow>
					<DataListCell>{item.index}</DataListCell>
					<DataListCell>{item.name}</DataListCell>
					<DataListCell>121512</DataListCell>
					<DataListCell>vfbgfbgf</DataListCell>
					<DataListCell>vfbgfbgf</DataListCell>
					<DataListCell>vfbgfbgf</DataListCell>
				</DataListRow>
			</DataList>
		</div>
	</div>
</div>

<style lang="scss">
	.what {
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
	}
</style>
