<script   context="module" lang="ts">
   import type {ElementProps} from '../../../types';

</script>
<script lang="ts">

  export let icon: string;
  export let primary: string;
  export let secondary: string;
  export let action: string;

  export let density: ElementProps['density'] = 'default';

</script>
<li class="listItemTitle density-{density}">
    <div class="listItemIcon">
        <slot name="icon"></slot>
    </div>
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
    </div>
    <div class="listItemAction">
        <slot name="action"></slot>
    </div>
</li>

<!--
    local instead of global
    means that the sheet is shared at directory level
    useful for compound components,
    css is for cascading
-->
<style lang="scss" global>
  @import "List";
</style>


<!--i love slots-->
<slot name="iloveslots" />
<!--i love slot more but with less-->
<slot:iloveslots />