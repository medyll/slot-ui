<svelte:options accessors={true}/>
<script lang="ts">

  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;


  export let data         = [];
  export let defaultField = 'name';

  export let filteredData = [];

  let searchString;

  const doFind = <T = Record<string, any>>(list: T[], kw: string, field: string) => (event) => {
    // if kw empty
    if (!kw) {
      filteredData = data;
    } else {
      filteredData = filterList(list, kw, field);
    }
    // else
  };

  const filterList = <T = Record<string, any>>(list: T[], kw: string, field: string) => {
    if (!list) return list;
    if (!kw) return list;
    return list.filter((ll) => {
      let reg = new RegExp(kw, 'i');

      return ll[field].search(reg) > -1;
    });
  };

  $: if(!searchString) filteredData = data;

</script>

<input bind:value={searchString} bind:this={element} on:keydown={doFind(data,this.value,defaultField)} placeholder="find" type="search" {...$$restProps}/>
<slot name="noResultsSlot">
</slot>
<slot name="loadingSlot">
</slot>