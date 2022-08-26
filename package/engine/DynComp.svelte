<script>import { onMount } from 'svelte';
// import type { PostPayload } from '../../models/post';
export let id;
let ref;
onMount(async () => {
    ref =
        /*(id === 'masonry' && (await import('./masonry.svelte')).default) ||
        (id === 'item' && (await import('./item.svelte')).default) ||
        (id === 'slide' && (await import('./slide.svelte')).default) ||*/
        // Default value
        // (await import('./blank.svelte')).default;
        (null);
});
// props
export let compId;
export let payload;
</script>

<svelte:component this={ref} {payload} {compId} />