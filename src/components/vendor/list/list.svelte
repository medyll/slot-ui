<script lang="ts">
  import ListItem from './listItem.svelte';

  export let listItems: []                       = [];
  export let size: 'default' | 'small' | 'large' = 'default';

  export let direction: 'vertical' | 'horizontal' = 'vertical';

  let style: Record<string, any> = {};
</script>

<ul style="{style}">
    {#each listItems as lisItem}
        <ListItem
                primary=""
                secondary="">
            <div slot="icon"></div>
            <div slot="action"></div>
        </ListItem>
    {/each}
    <slot></slot>
</ul>

<style lang="scss">

</style>