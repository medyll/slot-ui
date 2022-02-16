<script lang="ts">

  import type {ElementProps} from '../../../types';
  import Divider from '../divider/Divider.svelte';

  type LevelType = 'success' | 'info' | 'error' | 'warning';
  type action = ElementProps['action'];

  /** type of levels */
  export let level: LevelType = 'info';
  export let action;
  export let data;
  export let text: string;
</script>
<div class="alert border-1">
    <slot></slot>
    {#if $$slots.action}
        <Divider/>
        <slot name="action"></slot>
    {/if}
</div>
<style lang="scss">

</style>