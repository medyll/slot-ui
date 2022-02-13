<script lang="ts">
  export let item = [];

</script>
{#each item as key,val}
    <slot item={val}>
    </slot>
{/each}