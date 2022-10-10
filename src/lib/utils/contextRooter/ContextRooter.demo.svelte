<script lang="ts">

    /* demo */
    import {
      defaultsArgs,
      defaultsArgsFromProps,
    } from '$lib/base/demoer/demoer.utils.js';
    import ComponentExample from '$lib/demo/ComponentExample.svelte';
    import DemoerCode from '$lib/base/demoer/DemoerCode.svelte';
    import Demoer from '$lib/base/demoer/Demoer.svelte';
    import DemoPage from '$lib/base/demoer/DemoPage.svelte';
    import Icon from '$lib/base/icon/Icon.svelte';
    import {uiPresets} from '$lib/engine/presets.js';
    /* demo */

    let codeSlot = `
<script>
    /** read and set svelte context from component root */
    import ContextRooter  from "./ContextRooter.svelte";
    let myContextRef;
    setContext("myContext", {});

    $: myContext = myContextRef?.menuAgent
<\/script>

<ContextRooter
    contextKey="myContext"
    bind:this={myContextRef} />`;
</script>

<ComponentExample
        component="ContextRoot">
    <div class="flex-v gap-large">
        <DemoerCode code={codeSlot} />
    </div>

</ComponentExample>