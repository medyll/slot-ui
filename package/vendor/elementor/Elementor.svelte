<script >export let item = {};
let itemKeyList;
$: itemKeyList = Object.keys(item);
</script>
{#each itemKeyList as key,val}
    <slot itemObject={{key:key , value:item[key] }}>
    </slot>
{/each}