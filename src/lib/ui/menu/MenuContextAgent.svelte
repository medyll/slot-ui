<svelte:options accessors={true} />

<script lang="ts"> 
  import { getContext } from "svelte";

  export const menuAgent = getContext("menuStateContext");
</script>
