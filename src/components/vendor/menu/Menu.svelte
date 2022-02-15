
<script lang="ts">
  import type {menuListItemType} from './types';
  import type {ElementProps} from '../../../types';
  import MenuItem from './MenuItem.svelte';

  export let menuList: menuListItemType[];
  export let density: ElementProps['density'] = 'tight';
</script>
<ul role="menu" class="density-{density} menu">
    {#if menuList}
        {#each menuList as menuItem}
            <slot menuItem={menuItem}>
                <MenuItem {...menuItem}/>
            </slot>
        {/each}
    {/if}
    <slot></slot>
</ul>
<style lang="scss"  global  >
  @import "Menu.scss";
</style>