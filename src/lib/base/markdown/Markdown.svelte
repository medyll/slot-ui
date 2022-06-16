<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { compute_slots, get_slot_changes } from 'svelte/internal';

	 
    let slotObj;
    let source = `[Name of link](url)# a second header`;

    $: source = slotObj?.innerHTML;
    $: console.log(source);
 
</script> 

<SvelteMarkdown isInline={true}  {source}    />
  
<span style="display: none;" bind:this={slotObj}><slot/></span>
