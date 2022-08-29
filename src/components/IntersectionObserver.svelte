<script lang=ts>
    // from https://svelte.dev/repl/c461dfe7dbf84998a03fdb30785c27f3?version=3.16.7
	import { onMount } from 'svelte';

	export let once = false;
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;

	let intersecting = false;
	let container: HTMLElement;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

			const observer = new IntersectionObserver(entries => {
				intersecting = entries[0].isIntersecting;
				if (intersecting && once) {
					observer.unobserve(container);
				}
			}, {
				rootMargin
			});

			observer.observe(container);
			return () => observer.unobserve(container);
		}

		function handleScroll() {
			const bcr = container.getBoundingClientRect();
			intersecting = (
				(bcr.bottom + bottom) > 0 &&
				(bcr.right + right) > 0 &&
				(bcr.top - top) < window.innerHeight &&
				(bcr.left - left) < window.innerWidth
			);

			if (intersecting && once) {
				window.removeEventListener('scroll', handleScroll);
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>


<div bind:this={container}>
	<slot {intersecting}></slot>
</div>
