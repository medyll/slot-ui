<script lang="ts">
  export type SizeType = keyof typeof sizes
  import type {ElementProps, TIcon} from '$lib/../../../types';
  import Iconify from '@iconify/iconify';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';
  import {onDestroy} from 'svelte';

  import {browser} from '$app/env';


  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let style:string = '';
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  const sizes: Record<ElementProps['sizeType'], number> = {
    tiny   : 8,
    small  : 16,
    medium : 24,
    default: 32,
    large  : 48,
    big    : 64,
  } as const;


  export let icon: TIcon        = 'question';
  export let iconFamily: string = 'fa-solid';
  export let fontSize: SizeType = 'small';

  onDestroy(() => {
  });

</script> 
{#if browser}
  <span><i class="iconify-inline {className}"
   data-icon="{iconFamily}:{icon}"
   style="font-size:{sizes[fontSize]}px;{style}"></i></span>
{/if}
