<script lang="ts">
  import {fade, slide} from 'svelte/transition';
  import Icon from '../../ui/icon/Icon.svelte';

  export let label: string;
  export let icon: string;

  let isOpen: boolean = false;

  export const actions = {
    open  : () => {
      isOpen = true;
    },
    toggle: () => {
      isOpen = !isOpen;
    }
  };

  $: chevronIcon = !isOpen? 'faChevronDown' : 'faChevronUp'
</script>
<div class="cartoucheHolder">
    <div class="cartouche" on:click="{actions.toggle}">
        <div class="icon">icon</div>
        <div class="title">{label}</div>
        <div class="chevron">
            <Icon icon="{chevronIcon}"/>
        </div>
    </div>
    {#if isOpen}
        <div class="cartoucheContent" transition:slide>
            <slot></slot>
        </div>
    {/if}
</div>
<style lang="scss">
  .cartoucheHolder {
    border-radius: 6px;
    overflow: hidden;
    border:1px solid rgba(157, 157, 157, 0.8);

    .cartoucheContent {
      padding: 0.5rem;
      overflow:hidden;
      border-radius: 6px;
    }
  }

  .cartouche {
    display: flex;
    grid-gap: 8px;
    background-color: rgba(157, 157, 157, 0.4);
    height: 48px;
    align-items: center;

    .title {
      flex: 1;
    }

    .icon {
      padding: 0 1rem;
      border-right: 1px solid #ededed;
    }
    .chevron {
      padding: 0 1rem;
      border-left: 1px solid #ededed;
    }
  }
</style>