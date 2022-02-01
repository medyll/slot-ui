<script lang="ts">
  export let icon: string;
  export let primary: string;
  export let secondary: string;
  export let action: string;
</script>

<li>
    <slot name="icon"></slot>
    <div>
        <slot name="primary"></slot>
        <slot name="secondary"></slot>
    </div>
    <slot name="action"></slot>
</li>

<style lang="scss">
  .li {
    display: flex;
    align-items: center;
  }
</style>