<script lang="ts">
  import {stickTo} from '$lib/uses/stickTo/stickTo';
  import type {ElementProps} from 'src/types';
  import {createEventForwarder} from '$lib/engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLInputElement | null = null;
  const forwardEvents                         = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  export let data: ElementProps['data'] | undefined                               = undefined;
  export let options: { data?: ElementProps['data']; text: string; icon?: any }[] = [];

  let innerRef;
  let absolute           = 'absolute';
  let isVisible: boolean = false;

  let timerClick: any;

  const show = (visible: boolean) => (event) => {
    timerClick = setTimeout(() => {
      isVisible = visible;
    }, 250);
  };


  const handleClick = (visible: any) => (event: MouseEvent) => {
    event.stopPropagation();
    clearTimeout(timerClick);
    setTimeout(() => {
      element.focus();
    }, 0);
  };
</script>

<input use:forwardEvents bind:this={element} id="cool" on:blur={show(false)} on:focus={show(true)}/>
<ul
        bind:this={innerRef}
        class="select pos-abs shad-16 inputBorder"
        on:click={handleClick('clicked')}
        role="listbox"
        style="display:{isVisible ? 'block' : 'none'}"
        use:stickTo={{ parentNode: document.getElementById('cool'), position: 'B' }}
>
    {#each options as option}
        <slot {option}>123</slot>
    {/each}
</ul>

<style global lang="scss">
  @import "./Select";
</style>
