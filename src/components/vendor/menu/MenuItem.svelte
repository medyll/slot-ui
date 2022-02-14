<script lang="ts">
  import type {menuListItemType} from './types';

  export let text: menuListItemType['text'];
  export let icon: menuListItemType['icon'];
</script>

<li role="menuitem" class="menuItem">
    <div>
        <slot name="menuItemIconSlot"></slot>
    </div>
    <slot>
        <slot name="menuItemTextSlot">{text}</slot>
    </slot>
</li>
<style lang="scss"  >
  @import "Menu.scss";
</style>