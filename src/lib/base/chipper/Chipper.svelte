<script lang="ts">
  import {null_to_empty} from 'svelte/internal';

  let className = '';
  export {className as class};
  export let element: HTMLDivElement | undefined = undefined;

  export let style: string | undefined                     = undefined;
  /** position of the chipper */
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  export let bgTheme: string | undefined                   = 'primary';
  /** css color code for the chip */
  export let color: string | undefined                     = undefined;
  /** text or html is slot is not used */
  export let content: string | undefined                   = undefined;
  /** show or hide the chip */
  export let showChip: boolean                             = true;

  $: cssColor = color ?? (bgTheme ?  `var(--theme-color-${bgTheme})` : "");
</script>

<div bind:this={element}
     style="{style};position:relative;"
     class="chipperRoot gap-tiny {className} "> 
    <slot>
        {#if content}
            <div class="chipperContent">{@html null_to_empty(content)}</div>
        {/if}
    </slot>
    <chip class="chipperChip" data-position={position} style:--css-button-chip-color={cssColor}>
        {#if showChip}
            <slot name="chipperChip">
                <div class="defaultChip"/>
            </slot>
        {/if}
    </chip>
</div>

<style lang="scss">
  @import "../../styles/slotui-vars.scss";
  @import "../../styles/presets.scss";

  .chipperRoot {
    position: relative;

    .chipperContent {
      padding: 0.5rem;
    }

    .chipperChip {
      display: block;
      position: absolute;
      z-index: 2;
      border-radius: 16px;
      transition: all 0.25s;
      max-height: 100%;
      background-color: var(--css-button-chip-color, var(--theme-color-primary));

      &[data-position='left'] {
        top: 2px;
        left: 2px;
        height: 100%;
        width: 3px;
      }

      &[data-position='right'] {
        top: 2px;
        right: 2px;
        height: 130px;
        width: 3px;
      }

      &[data-position='top'] {
        height: 4px;
        top: 2px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 50%;
      }

      &[data-position='bottom'] {
        height: 4px;
        bottom: 2px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 50%;
      }

      .defaultChip, [slot="chipperChip"] {
        display: block;
        height: 100%;
        width: 100%;
        min-height: 3px;
        background-color: var(--css-button-chip-color, var(--theme-color-primary));
      }
    }
  }

</style>
