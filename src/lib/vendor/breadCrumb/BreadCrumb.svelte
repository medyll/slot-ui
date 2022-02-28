<script lang="ts">
	import {createEventForwarder} from '$lib/engine/engine';
	import {get_current_component} from 'svelte/internal';

	interface BreadListType {
		action?: () => void;
		breads?: BreadListItemType[];
	}

	interface BreadListItemType<D = Record<string, any>> {
		text: string;
		icon: string;
		link?: string;
		data?: Record<string, any>;
	}

	/*  common slotUi exports*/
	let className = '';
	export {className as class};
	export let element: HTMLElement | null = null;
	const forwardEvents                       = createEventForwarder(get_current_component());
	/*  end slotUi exports*/

	export const breadList: BreadListType[] = [];
</script>

<nav use:forwardEvents bind:this={element} class="breadCrumb {className}">
	<ul>
		<li class="bread">
			<slot />
		</li>
	</ul>
</nav>

<style lang="scss">
	@import './BreadCrumb.scss';
</style>
