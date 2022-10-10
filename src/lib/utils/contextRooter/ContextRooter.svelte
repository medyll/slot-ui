<svelte:options accessors/>

<script lang="ts">
  import {getContext} from 'svelte';

  export let contextKey: any = undefined;

  export const contextRoot = getContext(contextKey);
</script>