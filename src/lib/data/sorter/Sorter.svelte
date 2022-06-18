<script lang="ts" context="module">
	export type SortItem = {};
	export type Data = Record<string, any>;
</script>

<script lang="ts">
	export const groupedData: SortItem[] = [];
	export let data: Data[];

	function sort() {}


</script>


<div>
	<slot />
</div>
