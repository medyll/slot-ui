<script lang="ts">
  import Select from "./Select.svelte";
  import Button from "$lib/base/button/Button.svelte";
  /* demo */
  import {
    defaultsArgs,
    defaultsArgsFromProps,
  } from "$lib/base/demoer/demoer.utils";
  import ComponentDemo from "$lib/_components/ComponentExample.svelte";
  import Demoer from "$lib/base/demoer/Demoer.svelte";
  import DemoPage from "$lib/base/demoer/DemoPage.svelte";
  import Icon from "$lib/base/icon/Icon.svelte";
  import { uiPresets } from "$lib/engine/presets.js";
  /* demo */

  import MenuItem from "$lib/ui/menu/MenuItem.svelte";

  let parametersSlot: any = {
    autoClose: {
      type: "boolean",
      values: [true, false],
    },
    stickToHookWidth: {
      type: "boolean",
      values: [false, true],
    },
    position: {
      type: "string",
      values: uiPresets.position,
    },
  };

  let componentArgsSlot = {
    ...defaultsArgs(parametersSlot),
    position: 'BC',
    data: [{id:1,name:'name'},{id:2,name:'name'},{id:3,name:'name'},{id:4,name:'name'}],
  };

  let codeSlot = `<script>
    const data = [{id:1,name:'name'},{id:2,name:'name'}];
<script> 

<Select
  let:optionsData
  value="2"
  name={"input_select"}
  {data} >
  <MenuItem  data={optionsData} >{optionsData.name}</MenuItem>
</Select>

<Select
  let:optionsData
  value="2"
  name={"input_select"}
  {data}
  dataFieldName={"name"} />
</Select>
`;

  let codeProps = `
<Loader
    status={"loading"}
    messages={{
        loading: 'Loading dataset',
        error  : 'An error occurred',
        empty  : 'Empty results',
        success: 'Success !'
      }}
    emptyIcon="mdi:database-search-outline"
    errorIcon="mdi:alert-circle-outline"
    loadingIcon="mdi:loading"
    successIcon="clarity:success-standard-line" />`;

  let isOpen = false;
</script>

<ComponentDemo component="Select">
  <div class="flex-v gap-large">
    <DemoPage code={codeSlot} component="Select" title="Using slots">
      <Demoer parameters={parametersSlot} componentArgs={componentArgsSlot} let:activeParams>
        <div class="pad-2">
          <Select
            {...activeParams}
            let:optionsData
            value="2"
            name={"select"}
            dataFieldName={"name"} 
            class=" w-large border-4">
            <MenuItem  data={optionsData} >{optionsData?.name}</MenuItem>
          </Select>
        </div>
      </Demoer>
    </DemoPage>
  </div>
</ComponentDemo>
