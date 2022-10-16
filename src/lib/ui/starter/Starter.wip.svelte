<script lang="ts">
  import Starter from "./Starter.svelte";
  import {toggleStarter} from "./actions";
  import Button from "$lib/base/button/Button.svelte";
  import Debug from "$lib/base/debug/Debug.svelte";

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
    isOpen: {
      type: "boolean",
      values: [true, false],
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

  let codeSlot = `<Window title="Slotted window" frameId="slotted" >
      <div class="pad-4 align-center">some slotted content</div>
  </Window>
  `;

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

<input type="button" on:click={toggleStarter} />
<Starter />
<!-- <ComponentExample
  component="Starter"
  cite="Claiming they were not doors, made what they are today : windows <br /> Ch XX, 1320">
  <div class="flex-v gap-large">
    <DemoPage code={codeSlot} component="Starter" title="Using slots">
      <Demoer
        parameters={parametersSlot}
        componentArgs={componentArgsSlot}
        let:activeParams>
        <div class="w-large h-large pos-rel" />
      </Demoer>
    </DemoPage>
  </div>
</ComponentExample> -->
