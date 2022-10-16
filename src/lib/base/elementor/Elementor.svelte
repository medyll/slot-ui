<script lang="ts">
    import {createEventForwarder} from '$lib/engine/engine.js';
    import {get_current_component} from 'svelte/internal';

    /*  common slotUi exports*/
    let className = '';
    export {className as class};
    export let element: HTMLDivElement | null = null;
    const forwardEvents                       = createEventForwarder(get_current_component());
    /*  end slotUi exports*/

  export let item = {};
  let itemKeyList;

  $: itemKeyList = Object.keys(item);
</script>
<div bind:this={element} use:forwardEvents>
{#each itemKeyList as key,val}
    <slot itemObject={{key:key , value:item[key] }}>
    </slot>
{/each}
</div>