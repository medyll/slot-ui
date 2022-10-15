<script lang="ts">
  import {createEventForwarder} from '../../engine/engine';
  import ContentSwitcher from '../../base/contentSwitcher/ContentSwitcher.svelte';
  import {get_current_component} from 'svelte/internal';
  import Icon from '../../base/icon/Icon.svelte';

  type MenuBarTitleType = string | undefined;

  /* common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  export let style: string | null           = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /* end slotUi exports*/

  export let title: MenuBarTitleType;
  export let icon: string | undefined      = undefined;
  export let orientation: 'right' | 'left' = 'right';
  export let contentSwitcherIcon: string   = 'search';

  const posTitle  = orientation === 'right' ? 1 : 3;
  const posCloser = orientation === 'right' ? 3 : 1;
</script>

<div bind:this={element}
     class="toggleBarRoot {className}"
     style={style} use:forwardEvents>
    {#if $$slots.toggleBarIcon || icon}
        <div class="pad">
            <slot name="toggleBarIcon">
                <Icon icon={icon}/>
            </slot>
        </div>
    {/if}
    <div class="title flex-main text-500" style="order:{posTitle};min-width:auto;flex:1;">
        {#if $$slots.toggleBarTitle || Boolean(title)}
            <slot name="toggleBarTitle">
                <div style="font-size:18px;min-width:auto;overflow:hidden;height:100%;" class="flex flex-align-middle overflow-hidden text-ellipsis">
                    <h5 class="text-ellipsis">{title}</h5>
                </div>
            </slot>
        {/if}
    </div>
    <div class="toggleBarContent" style="order:2;">
        <slot name="toggleBarButtons"/>
    </div>
    <div style="order:{posCloser}">
        <ContentSwitcher parent={element} icon={contentSwitcherIcon}>
            <svelte:fragment slot="contentSwitcherIcon">
                <slot name="contentSwitcherIcon"/>
            </svelte:fragment>
            <slot></slot>
        </ContentSwitcher>
    </div>
</div>
<style lang="scss">
  .toggleBarRoot {
    padding: var(--slotui-commandbar-padding, var(--box-density-1));
    display: flex;
    border-bottom: 1px solid var(--slotui-topbar-border-bottom-color, var(--theme-color-border));
    width: 100%;
    max-width: 100%;
    min-width: auto;
    position: relative;
    gap: var(--slotui-commandbar-gap, 0.25rem);

    .toggleBarContent {
      position: relative;
      min-width: auto;
      overflow: hidden;
    }
  }
</style>
