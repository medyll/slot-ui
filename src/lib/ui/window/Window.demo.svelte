<script lang="ts">
	import { openWindow } from './window.actions.js';
    import ComponentDemo from '$_components/ComponentExample.svelte';
</script>
<ComponentDemo
	component="Window"
	cite="Claiming they were not doors, made what they are today : window <br /> Ch XX, 1320"
>
<div class="flex-h gap-small">
    {#each [...Array(9)] as key, val}
        <button
            on:click={() => {
                openWindow('Window for key ' + val, {
                    // component: Debug,
                    componentProps: { some: 'props', someother: 'deprops' },
                    contentHTML: 'some wierd content'
                });
            }} 
        >
            key {val}
        </button>
    {/each}
</div>
</ComponentDemo>
