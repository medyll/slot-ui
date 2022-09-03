<script lang="ts">
	import DataList from '$lib/base/dataList/DataList.svelte'; 
	import DataListCell from '$lib/base/dataList/DataListCell.svelte';
	import DataListHead from '$lib/base/dataList/DataListHead.svelte'; 

	let data = [...Array(200)].map((caches, index: number) => {
		return { index, name: 'name '+index, otherName: 'otherName '+index };
	});
</script>

<div style="height:350px;width:450px;" class="what   pos-rel overflow-hidden pad-1">
	<DataList {data} >
		<DataListHead slot="head">
			<DataListCell  dataField="index">index</DataListCell>
			<DataListCell  dataField="name">name</DataListCell>
			<DataListCell  dataField="otherName"style="flex:1">otherName</DataListCell>
		</DataListHead>
	</DataList>
</div>

 

<style lang="scss">
	.what {
		background-color: var(--theme-color-background);
		color: var(--theme-color-text);
	}
</style>
