<svelte:options accessors/>
<script lang="ts">
  import BottomBar from '../bottomBar/BottomBar.svelte';
  import IconButton from '../button/IconButton.svelte';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

  type DrawerTitleType = string | undefined;
  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export type toggle = () => void;
  export let title: DrawerTitleType;

  // any
  export let isOpen: boolean        = true;
  export let hideCloseIcon: boolean = false;

  /**
   * position
   * @type 'wide' | 'inplace'
   */
  export let position: 'wide' | 'inplace' = 'wide';
  export let stickTo: 'right' | 'left'    = 'right';

  export function toggle(visibleSate?: boolean) {
    isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
  }

  let style;
  let dspStyle;
  let widthStyle;

  let positionStyle = position === 'wide' ? 'fixed' : 'relative';
  $: dspStyle = isOpen ? 'inherit' : 'none';
  $: widthStyle = isOpen ? '350px' : '0px';
  $:   style = `position:${positionStyle};width:${widthStyle}!important`;

  $: console.log(dspStyle);
</script>
<div bind:this={element} class="drawer flex-v h-full {className}" style={style} use:forwardEvents>
    <div style="position: absolute;z-index:8600;right:-14px">
        <IconButton
                icon="fa-chevron-right"
                iconFontSize="small"
                on:click={() => {
								toggle();
							}}
        />
    </div>
    {#if isOpen}
        <div class="h-full">
            {#if $$slots.drawerMenuBar || Boolean(title)}
                <div class="header flex-h">
                    <div class="flex-main flex-h flex-align-middle ">
                        {#if title}<span style="font-size:18px;" class="pad-l-4">{title}</span>{/if}
                        <slot name="drawerMenuBar"/>
                    </div>
                    {#if !hideCloseIcon}
                        <div>
                            <IconButton
                                    on:click={() => {
								toggle();
							}}
                                    iconFontSize="small"
                                    icon="faWindowClose"
                            />
                        </div>
                    {/if}
                </div>
            {/if}
            <div class="flex-main overflow-auto">
                {#if $$slots.content}
                    <slot name="content">content</slot>
                {/if}
            </div>
            {#if $$slots.drawerBottomBarSlot}
                <BottomBar>
                    <slot name="drawerBottomBarSlot">ss</slot>
                </BottomBar>
            {/if}
        </div>
    {/if}
</div>

<style global lang="scss">
  @import "Drawer";
</style>
