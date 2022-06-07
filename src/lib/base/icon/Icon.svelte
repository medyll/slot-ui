<script lang="ts">
  import type {ElementProps, TIcon} from '$lib/../../../types';
  import Iconify from '@iconify/iconify';

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
<i class="iconify-inline"
   data-icon="{iconFamily}:{icon}"
   style="font-size:{sizes[fontSize]}px"></i>
