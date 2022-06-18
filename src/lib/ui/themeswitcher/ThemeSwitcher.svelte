<script lang="ts">
	import Button from '$lib/base/button/Button.svelte';

	function switchThemeMode() {
		const themeMode = localStorage.getItem('themeMode') ?? 'light';
		const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
		document.body.setAttribute('data-theme', newThemeMode);
		localStorage.setItem('themeMode', newThemeMode);
	}
</script>

<Button
	link
	contained
    {...$$restProps}
	on:click={() => {
		switchThemeMode();
	}}>theme</Button>
