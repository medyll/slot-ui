<script lang="ts">
  import {createEventForwarder} from '$lib/engine/engine.js';
  import {get_current_component, get_slot_changes, null_to_empty} from 'svelte/internal';
  import {popper, type UsePopperProps} from '$lib/ui/popper/usePopper.js';
  import type {ElementProps} from '$lib/types/index.js';
  import Divider from '$lib/base/divider/Divider.svelte';
  import Menu from '$lib/ui/menu/Menu.svelte';
  import Popper from '$lib/ui/popper/Popper.svelte';
  import Icon from '$lib/base/icon/Icon.svelte';
  import {autofocus} from '$lib/uses/autofocus/autofocus.js';

  export let presetDefault = 'bordered contained';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLButtonElement | null = null;
  const forwardEvents                          = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  let buttonType = 'button';
  export {buttonType as type};

  /** icon as a parameter */
  export let icon: string | undefined       = undefined;
  /** icon as a parameter*/
  export let iconFamily: string | undefined = 'mdi';
  /** icon color as a parameter*/
  export let iconColor: string              = '#666';

  /** endIcon as a parameter */
  export let endIcon: string | undefined = undefined;
  /** endIcon color as a parameter*/
  export let endIconColor: string        = '#666';
  /** endIcon color as a parameter*/
  export let endIconSize: string         = 'small';

  /** background color theme */
  export let bgTheme: string | undefined           = undefined;
  /** paramters for usePopper */
  export let usePopper: UsePopperProps | undefined = undefined;
  /** show loading state */
  export let loading: boolean                      = false;
  /** show chip */
  export let showChip: boolean                     = false;
  /** show / hide popper, when $$slots.popper exists */
  export let popperOpen: boolean                   = false;
  ;

  /** button style contained */
  export let contained: boolean | undefined = undefined;
  /** button style bordered */
  export let bordered: boolean | undefined  = undefined;
  /** button style link */
  export let link: boolean | undefined      = undefined;
  /** button style link */
  export let naked: boolean | undefined     = undefined;

  /** with of the button using  presets */
  export let size: ElementProps['sizeType'] | 'full' = 'auto';
  /** density of the button, using preset values */
  export let density: ElementProps['density']        = 'default';
  /** add ellipsis on overflowed text */
  export let nowrap: boolean                         = false;
  /** height of the button, using preset values */
  export let height: string                          = 'default';
  /**  button selected */
  export let selected: boolean                       = false;
  /**  give focus to button on display */
  export let focus: boolean                          = false;

  /** action button css style */
  export let actionStyle: string | undefined   = undefined;
  /** whole container css style */
  export let htmlRootStyle: string | undefined = undefined;

  export let primary: string | undefined   = undefined;
  export let secondary: string | undefined = undefined;

  /** reverse the order of the button zone*/
  export let reverse: boolean = false;

  /** aspect ratio of the button */
  export let ratio: string = 'auto';

  if (contained || bordered || link || naked) presetDefault = '';

  let containerRef;
  // for action
  let actionArgs: any;
  let actionComponent      = Menu;
  let actionComponentProps = {};
  let actionContent        = '';

  if (contained || bordered || link) {
    presetDefault = '';
  } else {
    link      = presetDefault.includes('link');
    bordered  = presetDefault.includes('bordered');
    contained = presetDefault.includes('contained');
  }

  function useAutoFocus(node: HTMLElement) {
    if (focus) return autofocus(node);
  }

  $: if (usePopper) {
    usePopper.disabled   = false;
    usePopper.parentNode = element;
  } else {
    usePopper = {disabled: true};
  }

  $: actionArgs = {
    code          : 'node',
    parentNode    : element,
    component     : actionComponent,
    componentProps: actionComponentProps ?? {},
    position      : 'BL',
    content       : actionContent,
    disabled      : false
  };
</script>

<container bind:this={containerRef} style="position:relative;display:flex;{htmlRootStyle}">
    <button
            class={className}
            class:loading
            bind:this={element}
            use:popper={usePopper}
            use:forwardEvents
            use:useAutoFocus
            on:click
            on:clickAway={() => {
			popperOpen = false;
		}}
            data-height={height}
            type={buttonType}
            {density}
            {nowrap}
            {link}
            {bordered}
            {contained}
            {naked}
            {selected}
            {presetDefault}
            {...$$restProps}
            data-width="{size}"
            style:background="var(--theme-color-{bgTheme})"
            style:color={bgTheme ? 'white': ''}
            style:aspect-ratio={ratio}
    >
        <div class="innerButton">
            {#if $$slots.buttonStart  || icon}
                <div class="buttonStart">
                    <slot name="buttonStart">
                        {#if icon}
                            <Icon fontSize="small" {icon} color={iconColor} {iconFamily}/>
                        {/if}
                    </slot>
                </div>
            {/if}
            {#if $$slots.default ?? primary}
                <div class="central">
                    <slot>{null_to_empty(primary)}</slot>
                </div>
            {/if}
            {#if $$slots.buttonEnd || endIcon}
                <div class="action">
                    <slot name="buttonEnd">
                        <Icon fontSize="small" icon={endIcon} color={endIconColor}/>
                    </slot>
                </div>
            {/if}
        </div>
        {#if loading}
            <div
                on:click={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
                class="loadingButtonZone">
                <div class="flex-h flex-align-middle gap-tiny">
                    <div>
                        <slot name="buttonLoadingIcon">
                            <Icon icon="loading" rotate/>
                        </slot>
                    </div>
                    <div>loading</div>
                </div>
            </div>
        {/if}
        {#if showChip}
            <span class="chip"/>
        {/if}
    </button>
    {#if element && $$slots.buttonPopper}
        <svelte:self
                contained
                style="position:relative;height:100%;{actionStyle}"
                on:click={(event) => {
				event.preventDefault();
				popperOpen = !popperOpen;
			}}
                size="tiny"
                icon="chevron-{popperOpen ? 'up' : 'down'}"
                iconSize="small"
                class="actionButton"
        />
        {#if popperOpen}
            <Popper code="button" {...actionArgs} parentNode={element}>
                <slot name="buttonPopper"></slot>
            </Popper>
        {/if}
    {/if}
</container>
{#if secondary}
    <div style={`display:block;width:${element?.style?.width}px`}>
        <Divider/>
        {@html secondary}
    </div>
{/if}

<style lang="scss">
  @import '../../styles/presets.scss';
  @import "../../styles/slotui-vars.scss";

  .actionButton {
    height: 100%;
    //background-color: rgba(255, 255, 255, 0.1);
    width: var(--w-tiny);
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  /* button *, .button *, input[type='button'] * {
      pointer-events: none;
  } */
  .button,
  button,
  button[contained='true'],
  input[type='button'],
  input[type='submit'] {
    @include input-sizes-presets;
    @include ui-width-presets;
    vertical-align: middle;
    font-size: var(--slotui-button-font-size, 11px);
    // padding: var(--box-density-small, 0.5rem) 0.75rem;
    border-radius: var(---slotui-button-radius, var(--box-radius-tiny, 4px));
    border: 0.5px solid transparent;
    // padding: auto var(--box-density-preset-tiny);
    color: var(--theme-color-foreground);
    padding: 0;
    transition: all 0.2s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      transition: all 0.3s;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &[disabled] {
      color: var(--color-gray-800);
      border-color: none;
      opacity: 0.4;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: var(--box-shad-3);
    }

    &:active,
    &:focus {
      outline: 0;
    }

    &:active {
      transform: scale(0.97);
      border: 0.5px solid var(--theme-color-primary) !important;
      box-shadow: var(--box-shad-4);
    }

    &:focus {
      border: 0.5px solid var(--theme-color-primary);
      box-shadow: var(--box-shad-3);
    }

    @include input-sizes-presets;
  }

  .button,
  button {
    position: relative;
    overflow: hidden;

    &[nowrap] {
      color: ' ';
    }

    /** variant presets */
    &[selected='true'] {
      box-shadow: var(--box-shad-3);
      border: 0.5px solid var(--theme-color-paper-alpha-low);
      background-color: transparent;
      font-weight: bold;
    }

    &[bordered='true'] {
      color: var(--theme-color-foreground);
      border: 0.5px solid var(--theme-color-border);
      box-shadow: var(--box-shad-1);

      &:hover {
        border: 0.5px solid var(--theme-color-primary);
      }
    }

    &[contained='true'] {
      color: var(--theme-color-foreground);
      background-color: var(--theme-color-paper-alpha-low, rgba(255, 255, 255, 0.1));
      // background-color: var(--theme-color-primary-alpha, rgba(255, 255, 255, 0.1)) !important;
      &:hover {
        // background-color: var(--theme-color-paper) !important;
        background-color: var(--theme-color-primary, rgba(255, 255, 255, 0.1)) !important;
        color: white;
      }

      &:focus {
        outline: 0;
        background-color: var(--theme-color-background-alpha);
      }
    }

    &[link='true'] {
      color: var(--theme-color-primary);
      text-decoration: underline;
      text-underline-offset: 0.35rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    &[naked='true'] {
      color: inherit;
      background-color: transparent !important;
      border: 0.5px solid transparent;
      cursor: pointer;

      &:hover,
      &:active,
      &:focus {
        background-color: transparent !important;
        border: 0.5px solid transparent;
        color: inherit;
      }
    }

    &.loading {
      & .loadingButtonZone {
        z-index: 010;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        max-height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: var(--css-background-color, var(--theme-color-paper));
        color: var(--css-background-color, var(--theme-color-secondary));
        backdrop-filter: blur(3px);
      }
    }

    .innerButton {
      width: 100%;
      overflow: hidden;
      position: relative;
      z-index: 1;
      display: flex;
      min-width: auto;
      align-items: center;
      justify-content: center;
      height: 100%;

      .buttonStart {
        padding: 0 var(--box-density-preset-tiny, 0.25rem);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .central {
        flex: 1;
        min-width: auto;
        width: auto;
        display: inline;
        vertical-align: bottom;
        padding: 0 0.5rem;

        &[nowrap] {
        }
      }

      .action {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        // background-color: rgba(255, 255, 255, 0.1);
        width: var(--w-tiny);
        padding: 0 0.5rem;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }

    .chip {
      position: absolute;
      z-index: 2;
      height: 3px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 50%;
      background-color: var(--css-button-chip-color, var(--theme-color-primary));
      border-radius: 16px;
      bottom: 2px;
    }
  }
</style>
