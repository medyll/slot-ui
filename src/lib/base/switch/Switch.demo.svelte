<script lang="ts">
  import Switch from "./Switch.svelte";
  import Button from "$lib/base/button/Button.svelte";
  import { defaultsArgs, defaultsArgsFromProps } from "../demoer/demoer.utils";
  /* demo */
  import ComponentExample from "$components/demo/ComponentExample.svelte";
  import Demoer from "$lib/base/demoer/Demoer.svelte";
  import DemoPage from "$lib/base/demoer/DemoPage.svelte";
  import Icon from "$lib/base/icon/Icon.svelte";
  import { uiPresets } from "$lib/engine/presets.js";
  /* demo */

  let parametersSlot: any = {
    autoClose: {
      type: "boolean",
      values: [true, false],
    },
    stickToHookWidth: {
      type: "boolean",
      values: [true, false],
    },
    position: {
      type: "string",
      values: uiPresets.position,
    },
  };

  let componentArgsSlot = defaultsArgs(parametersSlot);

  let codeSlot = `
<Switch  name={'switcher'} class="w-small" >
  <span slot="label" />
</Switch>`;

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

<ComponentExample component="Switch">
  <div class="flex-v gap-large">
    <DemoPage code={codeSlot} component="Switch" title="Using slots">
      <Demoer {parametersSlot} {componentArgsSlot} let:activeParams>
      <div class="pad-2">
        <Switch {...activeParams} name={'switcher'} class="flex-h flex-align-middle w-small" >
          <span slot="label" />
        </Switch>
      </div>
    </Demoer>
    </DemoPage>
  </div>
</ComponentExample>
