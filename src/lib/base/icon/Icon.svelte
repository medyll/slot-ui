
<script lang="ts">
  import * as All1 from '@fortawesome/free-solid-svg-icons'; // add faSolid
  import * as All2 from '@fortawesome/free-brands-svg-icons';
  import * as All3 from '@fortawesome/free-regular-svg-icons';
  import type {ElementProps} from '$lib/../../../types';
  import type {TIcon} from '$lib/../../../types';

  let IconTypes = {...All1, ...All2, ...All3} as const;


  const sizes: Record<ElementProps['sizeType'], number> = {
    tiny   : 8,
    small  : 16,
    medium : 24,
    default: 32,
    large  : 48,
    big    : 64,
  } as const;

  export type SizeType = keyof typeof sizes


  export let icon: TIcon        = 'faQuestion';
  export let fontSize: SizeType = 'medium';

</script>
<i class="fa {icon}"></i>
<!--<Fa icon={IconTypes[icon]} on:click style="font-size:{sizes[fontSize]}px"/>-->
