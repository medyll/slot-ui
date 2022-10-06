<script lang="ts">
  import {fade} from 'svelte/transition';
  import Icon from '$lib/base/icon/Icon.svelte';

  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  export let style: string                  = '';

  export let status: 'loading' | 'success' | 'error' | 'empty';
  /** @deprecated */
  export let isLoading: boolean = false;
  /** @deprecated */
  export let isError: boolean   = false;
  /** @deprecated */
  export let isEmpty: boolean   = false;

  /** icon sources */
  export let loadingIcon: string = 'mdi:loading';
  export let errorIcon: string   = 'mdi:alert-circle-outline';
  export let emptyIcon: string   = 'mdi:database-search-outline';
  export let successIcon: string   = 'clarity:success-standard-line';

  /** message to display */
  export let message: string | undefined = undefined;
  /** used if props.message   is omitted */
  export let messages: any               = {
    loading: 'Loading',
    error  : 'An error occurred',
    empty  : 'Empty results',
    success: 'Success'
  };

  const msgType = isLoading ? 'loading' : isError ? 'error' : isEmpty ? 'empty' : '';

  $: finalMessage = message ?? messages?.[status] ?? messages?.[msgType];
</script>

{#if status || isLoading || isError || isEmpty}
    <div bind:this={element} transition:fade class="root {className}" {style}>
        <div class="loaderBox">
            {#if status === 'loading' || isLoading}
                <slot name="loadingSlot">
                    <Icon
                            style="color:var(--theme-color-primary)"
                            icon={loadingIcon}
                            fontSize="medium"
                            rotate
                    />
                </slot>
            {/if}
            {#if status === 'error' || isError}
                <slot name="errorSlot">
                    <Icon style="color:orange;" icon={errorIcon} fontSize="big"/>
                </slot>
            {/if}
            {#if status === 'success' }
                <slot name="successSlot">
                    <Icon style="color:green;" icon={successIcon} fontSize="big"/>
                </slot>
            {/if}
            {#if status === 'empty' || isEmpty}
                <slot name="emptySlot">
                    <Icon icon={emptyIcon} fontSize="big"/>
                </slot>
            {/if}

            {#if Boolean(finalMessage)}
                <slot name="messageSlot">
                    <div class="message">{finalMessage}</div>
                </slot>
            {/if}
        </div>
    </div>
{/if}

<style lang="scss">
  .root {
    position: absolute;
    top: 0;
    background-color: var(--theme-color-background-alpha);
    height: 100%;
    min-width: 128px;
    max-width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translate(-50%, 0);

    .loaderBox {
      box-shadow: var(--box-shad-1);
      border-radius: var(--radius-tiny);
      border: 1px solid var(--theme-color-foreground-alpha-high);
      padding: 1rem 0;
      min-width: 128px;
      width: 100%;
      margin: 1rem;
      text-align: center;
      background-color: var(--theme-color-background-alpha);
      display: flex;
      flex-direction: column;
      align-items: center;

      .message {
        border-radius: var(--radius-small);
        border-bottom: 1px solid;
        border-color: var(--theme-color-primary);
        padding: var(--box-density-1) var(--box-density-2);
        display: inline-block;
        box-shadow: var(--box-shad-1);
      }
    }
  }
</style>
