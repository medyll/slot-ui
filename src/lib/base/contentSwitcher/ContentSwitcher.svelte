
<script lang="ts">
	import IconButton from '../button/IconButton.svelte';
	import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import type {TIcon} from '../../../types';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let icon: TIcon = 'faToggleOff';
  export let parent: HTMLElement;

  let visibleSate: boolean = false;
  let thisHolderRef: any;
  let thisRef: any;

  function handleClick(event: MouseEvent) {
    visibleSate = !visibleSate;

    const children: HTMLCollection = parent.children;

    // iterate over all child nodes
    Array.from(children).forEach((li: any) => {
      //li.style.transform = visibleSate ? 'scale(0,0)' : '';
      li.style.display = visibleSate ? 'none' : '';
    });

    if (visibleSate) {
      parent.appendChild(thisRef);
    } else {
      thisHolderRef.appendChild(thisRef);
    }
  }
</script>

<IconButton {icon} iconFontSize="small" on:click={handleClick}/>
<div bind:this={thisHolderRef} style="display:none">
    <div bind:this={thisRef} class="flex-h flex-align-middle" style="width:100%;flex:1;">
        <div>
            <IconButton icon="faChevronLeft" iconFontSize="small" on:click={handleClick}/>
        </div>
        <div class="flex-main">
            <slot/>
        </div>
    </div>
</div>
