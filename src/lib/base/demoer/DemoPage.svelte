<script lang="ts"> 
  import Icon from "$lib/base/icon/Icon.svelte";
  import DemoerCode from "./DemoerCode.svelte";
  export let title: undefined = undefined;
  export let code: string = "";
  export let subTitle: undefined = undefined;
  export let component: string | undefined = undefined;

  let codeT = subTitle
    ? subTitle
    : `component ${component} demo ${title?.toLowerCase()}`;

  
 
</script>

<div>
  {#if title}<h5 class="flex-h flex-align-middle gap-small">{title}</h5>{/if}
  <div class="pad-l-2 flex-h  ">
    <div class="flex-main">
      <h6 class="border-b pad  flex-h flex-inline flex-align-middle gap-small">
        <Icon icon="mdi:eye" />{codeT}
      </h6>
      <div class="pad-l-2   pos-rel">
        <slot />
      </div>
    </div>
    {#if code || $$slots.code}
    <div class="w-tiers">
      <slot name="code">
        <DemoerCode {code} />
      </slot>
    </div>
    {/if}
  </div>
</div>
