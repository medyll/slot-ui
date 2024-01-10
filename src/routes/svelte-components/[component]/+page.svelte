<script lang="ts">
  import {fade} from 'svelte/transition';
  import {slotUiComponentList} from '$lib/sitedata/componentList';
  import {dataOp} from '$lib/engine/utils';

  export let data: any = {};

  let tt: any;
  $: tt = dataOp.filterListFirst(slotUiComponentList, data?.component, 'code');
</script>

<div out:fade|global={{duration: 200 }} in:fade|global={{duration: 200 }}>
    <svelte:component this={tt?.component}/>
</div>
