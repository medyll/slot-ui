
<script lang="ts">
      import Stepper from './Stepper.svelte';
  /* demo */
  import ComponentExample from '$lib/demo/ComponentExample.svelte';
  import Demoer from '$lib/base/demoer/Demoer.svelte';
  import DemoPage from '$lib/base/demoer/DemoPage.svelte';
  import {defaultsArgsFromProps} from '$lib/base/demoer/demoer.utils.js';
  import Icon from '$lib/base/icon/Icon.svelte';
  /* demo */

  let parametersSlot: any = {
    status: {
      type  : 'string',
      values: ['loading', 'success', 'error', 'empty', undefined],
    },
  };

  let componentArgsSlot = {
    status: defaultsArgsFromProps('status', parametersSlot),
  };

  let codeSlot = `
<Loader on:status:change={()=>{}} >
    <Icon slot="loadingSlot" icon="mdi:loading" rotate/>
    <Icon slot="errorSlot" icon="mdi:alert-circle-outline"/>
    <Icon slot="emptySlot" icon="mdi:database-search-outline"/>
    <Icon slot="successSlot" icon="clarity:success-standard-line"/>
    <div slot="messageSlot" class="border-b pad radius-tiny border-color-palette-green">status message</div>
</Loader>`;

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

    </script>

<ComponentExample 
component="Stepper"
>

</ComponentExample>