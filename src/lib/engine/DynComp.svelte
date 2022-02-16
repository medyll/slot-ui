<script lang="ts">
  import { onMount } from 'svelte';
  // import type { PostPayload } from '../../models/post';

  export let id: string;
  let ref: unknown;

  onMount(async () => {
    ref =
      /*(id === 'masonry' && (await import('./masonry.svelte')).default) ||
      (id === 'item' && (await import('./item.svelte')).default) ||
      (id === 'slide' && (await import('./slide.svelte')).default) ||*/
      // Default value
      // (await import('./blank.svelte')).default;
      (null)
  });

  // props
  export let compId: number;
  export let payload: Record<string,any>;
</script>

<svelte:component this={ref} {payload} {compId} />