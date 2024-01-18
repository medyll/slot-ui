<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/engine/eventForwarder.js';
	import Icon from '$lib/base/icon/Icon.svelte';
	/*  common slotUi exports*/
	let className = '';
	export { className as class };
	export let element: HTMLDivElement | null = null;
	const forwardEvents = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	/** icon name 	*/
	export let icon: string = 'icon-park-outline:avatar';
	/**
	 * size of the avatar
	 * @type {'tiny' | 'small' | 'medium' | 'large' | 'full'}
	 */
	export let size: 'tiny' | 'small' | 'medium' | 'large' | 'full' = 'large';
	/**
	 * size of the icon
	 * @type {'tiny' | 'small' | 'medium' | 'large' | 'full'}
	 */
	export let iconSize: 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'big' = 'large';

	const sizes = {
		tiny: '2rem',
		small: '4rem',
		medium: '8rem',
		large: '12rem',
		full: '100%'
	};
</script>

<div
	bind:this={element}
	class="avatar {className}"
	style="width:{sizes[size]};height:{sizes[size]}"
	use:forwardEvents
>
	<slot name="avatarBadge" />
	<slot>
		<Icon {icon} fontSize={iconSize} />
	</slot>
</div>

<style lang="scss">
	@import 'Avatar';
</style>
