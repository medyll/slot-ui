<script context="module" lang="ts">
  import type {ElementProps} from '../../../types';
</script>

<script lang="ts">

  export let density: ElementProps['density'];
  export let direction: 'vertical' | 'horizontal' = 'horizontal';

  export let tint: 'light' | 'dark' = 'light';
</script>

<hr class={tint}/>

<style lang="scss">
  hr {
    margin: 0 8px;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.1);
    display: block;

    &.light {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(255, 255, 255, 0.1);
    }

    &.dark {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
</style>