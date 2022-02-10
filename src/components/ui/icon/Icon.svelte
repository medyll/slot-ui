<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
  import * as All1 from '@fortawesome/free-solid-svg-icons';
  import * as All2 from '@fortawesome/free-brands-svg-icons';
  import * as All3 from '@fortawesome/free-regular-svg-icons';

  let IconTypes = {...All1, ...All2, ...All3} as const;

  export type TIcon = keyof typeof IconTypes;

  export let icon: TIcon = 'faAnchor';

  const sizes = {
    tiny   : 8,
    small  : 16,
    medium : 24,
    default: 32,
    large  : 48,
    big    : 64,
  } as const;
  type SizeType = keyof typeof sizes

  export let fontSize: SizeType = 'medium';
</script>
<Fa on:click style="font-size:{sizes[fontSize]}px" icon={IconTypes[icon]}/>
