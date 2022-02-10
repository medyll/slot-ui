<script lang="ts">
  import Icon  from '../../ui/icon/Icon.svelte';

  export let icon: any;
  export let style;
  export let className;
  export let showShip: boolean;
</script>

<button on:click style="{style}" class="{className}">
    <span>
        <span class="icon"><Icon icon="{icon}"/></span>
        <slot></slot>
    </span>
    {#if showShip}
        <span class="chip"></span>
    {/if}
</button>

<style lang="scss">
  button {
    padding: 8px;
    position: relative;
    background-color: transparent;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid rgba(255,255,255,0.1);
      background-color: rgba(255,255,255, 0.2);
      backdrop-filter: blur(10px);
    }

    span {
      display: flex;
      grid-gap: 4px;
    }

    .icon {

    }
    .chip {
      position: absolute;
      height: 6px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 50%;
      background-color: blue;
      border-radius: 16px;
      bottom: 0px;
    }
  }
</style>