<script lang="ts">
  import Badge from '../badge/Badge.svelte';

  export let size: 'tiny' | 'small' | 'medium' | 'large' | 'full' = 'large';

  const sizes = {
    tiny  : '2rem',
    small : '4rem',
    medium: '8rem',
    large : '12rem',
    full  : '100%',
  };

</script>

<div class="avatar" style="width:{sizes[size]};height:{sizes[size]}">
    <slot name="badge"></slot>
    <slot></slot>
</div>

<style lang="scss">
  .avatar {
    position: relative;
    border-radius: 20%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: grid;
    place-items: center;
    overflow: hidden;
  }
</style>
