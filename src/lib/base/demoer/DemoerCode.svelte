<script lang="ts">
  import Prism from "prismjs";
  import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
  import 'prism-svelte';
  import Icon from "$lib/base/icon/Icon.svelte";

  export let title: undefined = undefined;
  export let code: string = "";
  export let subTitle: undefined = undefined;
  export let component: string | undefined = undefined;

  Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": false,
    "right-trim": false,
    "break-lines": 80,
    // indent: 1,
    "remove-initial-line-feed": true,
    "tabs-to-spaces": 2,
    // "spaces-to-tabs": 20,
  });

  const highlighted = Prism.highlight(code, Prism.languages.svelte, "svelte");
</script>
<svelte:head>
<!-- <script>
    Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": false,
    "right-trim": false,
    "break-lines": 80, 
    "remove-initial-line-feed": true, 
  });
</script> -->
</svelte:head>
<div>
  {#if code || $$slots.code}
    <h6 class="border-b w-medium pad flex-h flex-align-middle gap-small">
      <Icon icon="mdi:code" /> code
    </h6>
    {#if title}<div class="text-bold pad pad-l-4">- {title}</div>{/if}
    <div class="marg-l-2 dsp-block-inline radius-small pad-ii-2">
      <slot name="code">
        <pre ><code  lang="language-svelte">{@html highlighted}</code></pre>
      </slot>
    </div>
  {/if}
</div>
<style>
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";
  .code {
    white-space: pre-wrap;
  }
</style>