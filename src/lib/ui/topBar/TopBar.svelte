<script context="module">

</script>
<script lang="ts">
  import {createEventForwarder} from '../../engine/engine';
  import ContentSwitcher from '../../base/contentSwitcher/ContentSwitcher.svelte';
  import {get_current_component} from 'svelte/internal';

  type MenuBarTitleType = string | undefined;

  /* common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  export let style: string | null           = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /* end slotUi exports*/

  export let title: MenuBarTitleType;
  export let orientation: 'right' | 'left' = 'right';
  export let contentSwitcherIcon: string   = 'search';

  const posTitle  = orientation === 'right' ? 1 : 3;
  const posCloser = orientation === 'right' ? 3 : 1;
</script>

<div bind:this={element}
     class="flex-h topBarRoot w-full  flex-align-middle {className} gap-2"
     style={style} use:forwardEvents>
    {#if $$slots.iconSLot}
        <div class="pad-l-i">
            <slot name="iconSLot"/>
        </div>
    {/if}
    <div class="title flex-main text-500" style="order:{posTitle};min-width:auto">
        {#if $$slots.menuBarTitle || Boolean(title)}
            <slot name="menuBarTitle">
                <div style="font-size:18px;min-width:auto;overflow:hidden;height:100%;" class="flex flex-align-middle overflow-hidden text-ellipsis">
                    <h5 class="text-ellipsis">{title}</h5>
                </div>
            </slot>
        {/if}
    </div>
    <div class="topBarContent" style="order:2;flex:1;">
        <slot name="menuBarButtons"/>
    </div>
    {#if $$slots.menuBarSwitcher}
        <div style="order:{posCloser}">
            <ContentSwitcher parent={element} icon={contentSwitcherIcon}>
                <slot name="menuBarSwitcher"/>
            </ContentSwitcher>
        </div>
    {/if}
</div>
<style lang="scss">
  .topBarRoot {
    padding: var(--slotui-topbar-padding, var(--box-density-1));
    display: flex;
    border-bottom: 1px solid var(--slotui-topbar-border-bottom-color, var(--theme-color-border));
    max-width: 100%;
    min-width: auto;
    position: relative;

    .topBarContent {
      position: relative;
      min-width: auto;
      overflow: hidden;
    }
  }
</style>
