<script lang="ts">
    import {createEventForwarder} from '$lib/engine/engine';
    import {get_current_component} from 'svelte/internal';

    /*  common slotUi exports*/
    let className = '';
    export {className as class};
    export let element: HTMLButtonElement | null = null;
    const forwardEvents                          = createEventForwarder(get_current_component());
    /*  end slotUi exports*/
</script>

<button {...$$props} bind:this={element} class="{className}" use:forwardEvents>
    <slot></slot>
</button>
