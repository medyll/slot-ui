<script lang="ts">
  import {fade} from 'svelte/transition';
  import {slotUiComponentList} from '$sitedata/componentList';
  import {dataOp} from '$lib/engine/utils';

  export let data: any = {};

  let tt: any;
  $: tt = dataOp.filterListFirst(slotUiComponentList, data?.component, 'code');
</script>

<div out:fade={{duration: 200 }} in:fade={{duration: 200 }}>
    <svelte:component this={tt?.component}/>
</div>
