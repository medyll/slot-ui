<script lang="ts">
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
	let className: string | undefined = undefined;
	/**
	 * css className to apply
	 */
	export { className as class };
	export let element: HTMLElement | null = null;
	/*  end slotUi exports*/

	export const breadList: BreadListType[] = [];
</script>

<nav bind:this={element} class="breadCrumb {className ?? ''}">
	<ul>
		<li class="bread">
			<slot />
		</li>
	</ul>
</nav>

<style lang="scss">
	@import 'BreadCrumb';
</style>
