<script lang="ts">
  /*  common slotUi exports*/
  let className = "";
  export { className as class };
  export let element: HTMLElement | null = null;
  export let style: string = ""; 
  /*  end slotUi exports*/

  import type { ElementProps } from "$lib/types/index.js";
  import Icon from "../icon/Icon.svelte";

  export let icon: string | undefined = undefined;
  /** displayed as H5*/
  export let primary: string | undefined = undefined;
  /** secondary title */
  export let secondary: string | undefined = undefined;
  export let action: string | undefined = undefined;

  export let density: ElementProps["density"] = "default";
</script>

<li {style} class="listItemTitle density-{density} {className}">
  {#if icon || $$slots.icon}
    <div class="listItemIcon">
      <slot name="icon">
        <Icon {icon} />
      </slot>
    </div>
  {/if}
  <div class="listItemContent">
    {#if primary || $$slots.primary}
      <h5>
        <slot name="primary">{primary}</slot>
      </h5>
    {/if}
    {#if secondary || $$slots.secondary}
      <div>
        <slot name="secondary">{secondary}</slot>
      </div>
    {/if}
    <slot />
  </div>
  {#if action || $$slots.action}
    <div class="listItemAction">
      <slot name="action" />
    </div>
  {/if}
</li>

<style lang="scss" global>
  @import "List";
</style>
