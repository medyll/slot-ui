<script lang="ts">
  import {SvelteComponent} from 'svelte';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import {stickTo} from '../../uses/stickTo/stickTo';
  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let parentElement: HTMLDivElement | null = null;

  export let component: SvelteComponent;
  export let componentProps: Record<string, any>;

</script>

// tooltip
// only one instance exists
// give instance an id
// templated tootips ?
<div use:stickTo={parentElement} use:forwardEvents bind:this={element} id="tooltip">
    <slot name="title"></slot>
    <slot name="description"></slot>
</div>