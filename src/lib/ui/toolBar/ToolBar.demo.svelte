<script lang="ts">
  import Button from "$lib/base/button/Button.svelte";
  import Debug from "$lib/base/debug/Debug.svelte";
  import ToolBar from "./ToolBar.svelte";

  /* demo */
  import {
    defaultsArgs,
    defaultsArgsFromProps,
  } from "$lib/base/demoer/demoer.utils.js";
  import ComponentExample from "$lib/demo/ComponentExample.svelte";
  import Demoer from "$lib/base/demoer/Demoer.svelte";
  import DemoPage from "$lib/base/demoer/DemoPage.svelte";
  import Icon from "$lib/base/icon/Icon.svelte";
  import { uiPresets } from "$lib/engine/presets.js";
  /* demo */

  let parametersSlot: any = {
    vertical: {
      type: "boolean",
      values: [false, true],
    }, 
    color: {
      type: "string",
      values: [undefined, "#999"],
    }, 
    closeOnValidate: {
      type: "boolean",
      values: [true, false],
    }, 
  };

  let multiple = {
    vertical: {
      false: { vertical: false },
      true: { vertical: true },
    },
  };

  $: componentArgsSlot = {
    ...defaultsArgs(parametersSlot),
    onClose: () => {
      componentArgsSlot.open = !componentArgsSlot.open;
    },
    data: [
      { id: 1, name: "name" },
      { id: 2, name: "name" },
      { id: 3, name: "name" },
      { id: 4, name: "name" },
    ],
  };

  let codeSlot = `      <ToolBar>
        <span>item 1</span>
        <span>item 2</span>
        <divider />
        <span>item 3</span>
        <span>item 4</span>
      </ToolBar>`;

  let codeProps = `
<Button
	on:click={() => {
		openWindow("html", {
		componentProps: { some: "props", someother: "deprops" },
		contentHTML:
			'<div class="pad-4 align-center">some html content</div>',
		});
	}}>
	Window with html content
</Button>

<Button
	on:click={() => {
		openWindow("component", {
		component: Debug,
		componentProps: { some: "props", someother: "deprops" },
		});
	}}>
	Window with component
</Button>`;
</script>

<ComponentExample
  component="ToolBar"
  cite="Way more than putting tools in a bar : having them in a toolbar ! <br /> Quead Jones, 450">
  <div class="flex-v gap-large">
    <DemoPage code={codeSlot} component="ToolBar" title="Using slots">
      <Demoer
        {multiple}
        parameters={parametersSlot}
        componentArgs={componentArgsSlot}
        let:activeParams>
        <div class="pad-2 h-large pos-rel">
          <ToolBar {...activeParams}>
            <span>item 1</span>
            <span>item 2</span>
            <divider />
            <span>item 3</span>
            <span>item 4</span>
          </ToolBar>
        </div>
      </Demoer>
    </DemoPage>
  </div>
</ComponentExample>
