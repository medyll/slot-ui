

<script lang="ts">
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/
  export let data: any = null;

  if (Array.isArray(data)) {}
  else if (typeof data === 'object') {}
  else if (typeof data === 'string') {}

</script>
