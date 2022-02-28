<script context="module" lang="ts">
</script>

<script lang="ts">
  import BottomBar from '../bottomBar/BottomBar.svelte';
  import IconButton from '../button/IconButton.svelte';
  import {createEventForwarder} from '$lib/engine/engine';
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

  export function toggle(visibleSate?: boolean) {
    isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
  }
</script>

{#if isOpen}
    <div use:forwardEvents bind:this={element} class="drawer flex-v h-full">
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
        {#if $$slots.content}
            <div class="flex-main">
                <slot name="content">content</slot>
            </div>
        {/if}
        <BottomBar>
            bar bottom
        </BottomBar>
    </div>
{/if}

<style lang="scss">
  @import "./Drawer";
</style>
