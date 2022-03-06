<script lang="ts">
	import type { ElementProps } from 'src/types';

	export let data: ElementProps['data'] | undefined = undefined;
	export let text: string| undefined = undefined;
	export let icon: any| undefined = undefined;
</script>

<li class="pad-1">
{text}
</li>
<slot />
