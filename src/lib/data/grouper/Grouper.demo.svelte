<script lang="ts">
  import Grouper, { type GroupedDataType } from "./Grouper.svelte";
  import Paper from "$lib/base/paper/Paper.svelte";

  /* demo */
  import {
    defaultsArgs,
    defaultsArgsFromProps,
  } from "$lib/base/demoer/demoer.utils.js";
  import ComponentExample from "$lib/demo/ComponentExample.svelte";
  import DemoerCode from "$lib/base/demoer/DemoerCode.svelte";
  import Demoer from "$lib/base/demoer/Demoer.svelte";
  import DemoPage from "$lib/base/demoer/DemoPage.svelte";
  import Icon from "$lib/base/icon/Icon.svelte";
  import { uiPresets } from "$lib/engine/presets.js";
  /* demo */

  const data = [...Array(89)].map((r, i) => {
    return {
      id: i,
      name: "one name",
      surName: "surname " + i,
      directory: ((prop: any) => "dir-" + (i % 4) + prop)(i),
      subdirectory: ((prop: any) => "subdir-" + (i % 8) + prop)(i % 8),
      directoryName: "This directory number" + (i % 4),
      nestedData: {
        uuid: crypto?.randomUUID() ?? i,
      },
    };
  });

  let groupedTemplateData: GroupedDataType;
  let groupedData: Record<string, any>;
  let activeGroupFieldAll: any;
  let activeGroupFieldPredefined: any;
  let activeGroupField: any;

  let parametersSlot: any = {
    grouperMode: {
      type: "string",
      values: ["menu", "button"],
    },
    showUnGrouped: {
      type: "boolean",
      values: [true, false],
    },
    groupByField: {
      type: "string",
      values: [undefined, "subdirectory"],
    },
    groupListItems: {
      type: "string",
      values: [undefined, ["directory", "subdirectory"]],
    },
  };

  let componentArgsSlot = { ...defaultsArgs(parametersSlot), data };

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

<ComponentExample component="Grouper">
  <div class="flex-v gap-large">
    <DemoPage code={codeAll} component="Popper" title="Using slots"> 
      <Demoer
        componentArgs={componentArgsSlot}
        let:activeParams
        parameters={parametersSlot}>
        <div class="flex-h flex-align-middle gap-tiny">
          <Grouper
            bind:groupedData
            bind:activeGroupField={activeGroupFieldAll}
            {...activeParams}>{activeGroupFieldAll}</Grouper>
        </div>
      </Demoer>
	  <div class="flex-h flex-wrap">
        <DemoerCode code={codePref} title="Choose fields" />
        <DemoerCode code={codeButtonMode} title="Button mode" />
	  </div>
    </DemoPage>
    <div>
      <pre>
{JSON.stringify(groupedData, null, " ")}
</pre>
    </div>
    <!-- <h5>Menu mode</h5>
    <div class="flex-h gap-small w-full">
      <div class="flex-v gap-small w-full">
        <h6>All</h6>
        <div class="flex-h">
          <div class="flex-main">
            <div class="flex-h flex-align-middle gap-tiny">
              <Grouper
                bind:groupedData
                bind:activeGroupField={activeGroupFieldAll}
                {data} />{activeGroupFieldAll}
            </div>
          </div> 
        </div>
        <h6>Predefined list</h6>
        <div class="flex-h">
          <div class="flex-main">
            <div class="flex-h flex-align-middle gap-tiny">
              <Grouper
                bind:groupedData
                bind:activeGroupField={activeGroupFieldPredefined}
                groupListItems={["directory", "subdirectory"]}
                {data} />{activeGroupFieldPredefined}
            </div>
            <div />
          </div>
          <div class="flex-main" />
        </div>
      </div>
    </div> -->
    <!-- <h5>Button mode</h5>
    <div>
      <div class="flex-h gap-small flex-align-middle"> 
        <div class="flex-main" />
        <div>
          {activeGroupField}
        </div>
      </div>
    </div> -->
  </div></ComponentExample>
