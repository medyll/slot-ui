<script lang="ts">
	import Grouper, { type GroupedDataType } from './Grouper.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import Paper from '$lib/base/paper/Paper.svelte';
	import ComponentDemo from '$components/ComponentExample.svelte';

	const data = [...Array(89)].map((r, i) => {
		return {
			id: i,
			name: 'one name',
			surName: 'surname ' + i,
			directory: ((prop: any) => 'dir-' + (i % 4) + prop)(i),
			subdirectory: ((prop: any) => 'subdir-' + (i % 8) + prop)(i % 8),
			directoryName: 'This directory number' + (i % 4),
			nestedData: {
				uuid: crypto?.randomUUID() ?? i
			}
		};
	});

	let groupedTemplateData: GroupedDataType;
	let groupedData: Record<string, any>;
	let activeGroupFieldAll: any;
	let activeGroupFieldPredefined: any;
	let activeGroupField: any;

	let codeAll = `<Grouper 
	bind:groupedData
	bind:activeGroupField={activeGroupFieldAll}
	{data}
	/>`;

	let codePref = `<Grouper
	bind:groupedData
	bind:activeGroupField={activeGroupFieldPredefined}
	groupListItems={['directory', 'subdirectory']}
	{data}
	/>`;

	let codeButtonMode = `<Grouper
	bind:activeGroupField
	bind:groupedData
	groupByField="directory"
	grouperMode="button"
	{data}
	>
		group by directory
</Grouper>
<Grouper
	bind:groupedData
	bind:activeGroupField
	groupByField="subdirectory"
	grouperMode="button"
	{data}
>
	group by subdirectory
</Grouper>
<div class="flex-main" />
<div>
	{activeGroupField}
</div>`;
</script>

<ComponentDemo component="Grouper">
	<h5>Menu mode</h5>
	<div class="flex-h gap-small w-full">
		<div class="flex-v gap-small w-full">
			<h6>All</h6>
			<div class="flex-h">
				<div class="flex-main">
					<div class="flex-h flex-align-middle gap-tiny">
						<Grouper
							bind:groupedData
							bind:activeGroupField={activeGroupFieldAll}
							{data}
						/>{activeGroupFieldAll}
					</div>
				</div>
				<div class="flex-main"><HighlightSvelte code={codeAll} /></div>
			</div>
			<h6>Predefined list</h6>
			<div class="flex-h">
				<div class="flex-main">
					<div class="flex-h flex-align-middle gap-tiny">
						<Grouper
							bind:groupedData
							bind:activeGroupField={activeGroupFieldPredefined}
							groupListItems={['directory', 'subdirectory']}
							{data}
						/>{activeGroupFieldPredefined}
					</div>
					<div />
				</div>
				<div class="flex-main">
					<Paper>
						<HighlightSvelte code={codePref} />
					</Paper>
				</div>
			</div>
		</div>
	</div>
	<h5>Button mode</h5>
	<div>
		<div class="flex-h gap-small flex-align-middle">
			<Grouper
				bind:activeGroupField
				bind:groupedData
				groupByField="directory"
				grouperMode="button"
				{data}
			>
				group by directory
			</Grouper>
			<Grouper
				bind:groupedData
				bind:activeGroupField
				groupByField="subdirectory"
				grouperMode="button"
				{data}
			>
				group by subdirectory
			</Grouper>
			<div class="flex-main" />
			<div>
				{activeGroupField}
			</div>
		</div>
		<HighlightSvelte code={codeButtonMode} />
	</div>
	<div>
		<pre>
{JSON.stringify(groupedData, null, ' ')}
</pre>
	</div>
</ComponentDemo>
