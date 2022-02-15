<script lang="ts">
  import type {menuListItemType} from './types';

  export let text: menuListItemType['text'];
  export let icon: menuListItemType['icon'];
</script>

<li role="menuitem" class="menuItem">
    <div class="menuItemIcon">
        <slot name="menuItemIconSlot">{icon}</slot>
    </div>
    <div class="menuItemText">
        <slot>
            <slot name="menuItemTextSlot">{text}</slot>
        </slot>
    </div>
</li>

<style lang="scss" global>
  @import "Menu.scss";
</style>