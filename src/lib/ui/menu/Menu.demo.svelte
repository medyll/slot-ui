<script lang="ts">
	import ComponentDemo from '$_components/ComponentExample.svelte';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<ComponentDemo
	component="Menu"
	cite="A menu is not a list, it's just like a list but more and less"
>
	<div class="flex-v gap-large">
		<h5>A menu</h5>
		<div class="dsp-inline">
			<Menu>
				<MenuItem>sxsxs</MenuItem>
				<MenuItem selected={true}>sxsxs</MenuItem>
				<MenuItem>sxsxs</MenuItem>
				<MenuItem>sxsxs</MenuItem>
				<MenuItem>sxsxs</MenuItem>
			</Menu>
		</div>
		<h5>A menu with some icons</h5>
		<div class="dsp-inline">
			<Menu>
				<MenuItem>sxsxs</MenuItem>
				<MenuItem icon="home" selected={true}>sxsxs</MenuItem>
				<MenuItem icon="close">sxsxs</MenuItem>
				<MenuItem>sxsxs</MenuItem>
				<MenuItem>sxsxs</MenuItem>
			</Menu>
		</div>
		<h5>A menu with some dividers</h5>
		<div class="dsp-inline">
			<Menu>
				<MenuItem  divider={true}>sxsxs</MenuItem>
				<MenuItem icon="home" selected={true}>sxsxs</MenuItem>
				<MenuItem icon="close">sxsxs</MenuItem>
				<MenuItem divider={true}>sxsxs</MenuItem>
				<MenuItem>sxsxs</MenuItem>
			</Menu>
		</div>
	</div></ComponentDemo
>
<br />
<br />
<br />
<br />
<ComponentDemo component="MenuItem" cite="A MenuItem gets one place to stay" />
