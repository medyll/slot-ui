<script context="module" lang="ts">
    
</script>
<script lang="ts">
  import {ElementProps} from './types';

  export let density: ElementProps['density'] = "default";

</script>
<li class="listItem density-{density}">
    <span class="listItemIcon">
        <slot></slot>
    </span>
    <span class="listItemTitle">
        <slot></slot>
    </span>
    <span class="listItemAction">
        <slot></slot>
    </span>
</li>


<style lang="scss"  >
  @import "List";
</style>
