<script>
    import DataList from "../../components/vendor/dataList/DataList.svelte";
    import DataListRow from "../../components/vendor/dataList/DataListRow.svelte";
    import DataListCell from "../../components/vendor/dataList/DataListCell.svelte";
    import DataListHead from "../../components/vendor/dataList/DataListHead.svelte";

    let items = [...Array(70000)];
</script>
<div class="what h-full pos-rel overflow-auto pad-4">
    <DataList bind:items let:item>
        <!--<DataListHead slot="head">
            <DataListCell>Title</DataListCell>
            <DataListCell>Title</DataListCell>
            <DataListCell>Title</DataListCell>
            <DataListCell>Title</DataListCell>
            <DataListCell>Title</DataListCell>
            <DataListCell>Title</DataListCell>
        </DataListHead>-->
        <DataListRow>
            <DataListCell>{item}</DataListCell>
            <DataListCell>121512</DataListCell>
            <DataListCell>121512</DataListCell>
            <DataListCell>vfbgfbgf</DataListCell>
            <DataListCell>vfbgfbgf</DataListCell>
            <DataListCell>vfbgfbgf</DataListCell>
        </DataListRow>
    </DataList>
</div>

<style lang="scss" global>
  .what {
    background-color: var(--theme-color-background);
    color: var(--theme-color-text);
  }
</style>