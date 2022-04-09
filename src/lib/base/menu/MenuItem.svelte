<script lang="ts">
  import {getContext} from 'svelte';
  import {null_to_empty} from 'svelte/internal';

  import type {MenuItemProps} from './types';
  import Divider from '$lib/vendor/divider/Divider.svelte';

  export let text: MenuItemProps['text'];
  export let icon: MenuItemProps['icon'] | undefined;
  export let divider: MenuItemProps['divider'];

  const menuStateContext = getContext<any>('menuStateContext');

  if (icon || $$slots.menuItemIconSlot) {
    $menuStateContext.hasIcon = true;
  }
</script>

<li class="menuItem" role="menuitem">
    {#if $menuStateContext.hasIcon}
        <div class="menuItemIcon">
            <slot name="menuItemIconSlot">{null_to_empty(icon)}</slot>
        </div>
    {/if}
    <div class="menuItemText">
        <slot>
            <slot name="menuItemTextSlot">{text}</slot>
        </slot>
    </div>
</li>
{#if divider}
    <li>
        <Divider extension="none"/>
    </li>
{/if}
<style global lang="scss">
  @import 'style';
</style>
