<svelte:options accessors/>
<script >import BottomBar from '../bottomBar/BottomBar.svelte';
import IconButton from '../button/IconButton.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
export let title;
// any
export let isOpen = true;
export let hideCloseIcon = false;
/**
 * position
 * @type 'wide' | 'inplace'
 */
export let position = 'wide';
export let stickTo = 'right';
export function toggle(visibleSate) {
    isOpen = visibleSate !== undefined ? visibleSate : !isOpen;
}
let style;
let dspStyle;
let widthStyle;
let positionStyle = position === 'wide' ? 'fixed' : 'relative';
$: dspStyle = isOpen ? 'inherit' : 'none';
$: widthStyle = isOpen ? '350px' : '0px';
$: style = `position:${positionStyle};width:${widthStyle}!important`;
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

<style global >:global(.drawer) {
  color: white;
  background-color: var(--theme-color-background-alpha);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 350px;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 3000;
  right: 0;
}
:global(.drawer) :global(.header) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 48px;
  display: flex;
  align-items: center;
}
:global(.drawer) :global(.header) :global(.title) {
  font-size: large;
}</style>
