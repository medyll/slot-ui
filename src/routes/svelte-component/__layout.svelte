<script lang="ts">
	import Frame from '$lib/ui/frame/Frame.svelte';
</script>

<Frame>
	<div slot="frameDrawerSlot">component List clickable</div>
	<div slot="contentFrameSlot">
		 <slot></slot>
	</div>
</Frame>
