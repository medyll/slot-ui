<script lang="ts">
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Frame from './Frame.svelte';
</script>

<ComponentDemo
	component="Frame"
	cite="What happens in the Frame, stays in the Frame <br /> B. Franklin, 1854"
>
	<div class="flex-h gap-medium border radius-small shad-1 overflow-hidden">
		<div style="height:350px;width:80%">
			<Frame>
				<div class="pad" slot="navLeftHeaderFrameSlot">
					<h4>Navigation header</h4>
				</div>
				<div class="pad" slot="frameDrawerSlot">
					<h4>frameDrawerSlot</h4>
				</div>
				<div class="pad" slot="contentHeader">
					<h4>title zone</h4>
				</div>
				<div class="pad" slot="content">
					<h5>content zone</h5>
				</div>
				<div class="pad" slot="bottom">
					<h5>bottom zone</h5>
				</div>
			</Frame>
		</div>
	</div>
</ComponentDemo>
