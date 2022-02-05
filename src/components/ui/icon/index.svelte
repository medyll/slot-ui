
<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
  import * as All1 from '@fortawesome/free-solid-svg-icons';
  import * as All2 from '@fortawesome/free-brands-svg-icons';
  import * as All3 from '@fortawesome/free-regular-svg-icons';

  let All = {...All1,...All2,...All3};
  export let icon: keyof typeof All = 'faAnchor';
</script>
<Fa width="56" icon={All[icon]}/>
