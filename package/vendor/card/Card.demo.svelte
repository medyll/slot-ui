<script >import Card from './Card.svelte';
</script>

{#each [...Array(4)] as key, val}
<Card>
    <h5 slot="title">Title of the box</h5>
    content
    <span slot="footer">Footer of the box</span>
</Card>
{/each}