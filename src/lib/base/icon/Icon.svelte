<script lang="ts">
  import type {ElementProps, TIcon} from '$lib/../../../types';
  import Iconify from '@iconify/iconify';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
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

  export type SizeType = keyof typeof sizes

  export let icon: TIcon        = 'question';
  export let iconFamily: string = 'fa-solid';
  export let fontSize: SizeType = 'small';

</script>
<i class="iconify-inline {className}"
   data-icon="{iconFamily}:{icon}"
   style="font-size:{sizes[fontSize]}px"></i>
