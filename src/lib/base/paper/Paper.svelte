<script lang="ts">
  import type { ElementProps } from "$lib/types/index.js";

  /*  common slotUi exports*/
  let className = "";
  export { className as class };
  export let element: HTMLDivElement | null = null;
  /*  end slotUi exports*/

  export let density: ElementProps["density"] = "default";
  export let style: string = "";

  let densityClass = {
    none: "",
    tight: "pad-1 marg-1",
    default: "pad-2 marg-2",
    kind: "pad-3 marg-3",
  };
</script>

<div class="paper shad-8 {densityClass[density]} {className}" {style}>
  <slot />
</div>

<style lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";
  .paper {
    color: var(--theme-color-foreground);
    background-color: var(--theme-color-paper);
    border-radius: 6px;
  }
</style>
