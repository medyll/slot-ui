<script lang="ts">
	import DataList from '$lib/base/dataList/DataList.svelte';
	import DataListRow from '$lib/base/dataList/DataListRow.svelte';
	import DataListCell from '$lib/base/dataList/DataListCell.svelte';
	import DataListHead from '$lib/base/dataList/DataListHead.svelte';

	let items = [...Array(70000)].map((caches, index: number) => {
		return {index, name: 'red', otherName: 'red' ,data:{}};
	});
</script>

<div class="flex-v gap-large">
	<h5>{'<DataList />'}</h5>
	<cite
		><p>
			Those who call they tables are the same who name stones as chairs. <br /> B. Franklin, 1854
		</p></cite
	>

	<div style="height:450px;" class="what   pos-rel overflow-hidden pad-4">
		<DataList {items} let:item> 
			<DataListHead slot="head">
				<DataListCell style="width:50px;">Title</DataListCell>
				<DataListCell style="width:50px;">Title</DataListCell>
				<DataListCell style="width:100%">Title 50%</DataListCell>
				<DataListCell style="width:100px">10px</DataListCell>
				<DataListCell style="width:100px ">Title</DataListCell>
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

<style lang="scss">
	.what {
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
	}
</style>
