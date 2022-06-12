<svelte:options accessors={true} />

<script context="module">export {};
</script>

<script>import { stickTo } from '../../uses/stickTo/stickTo';
import { clickAway } from '../../uses/clickAway/clickAway';
import { popperList } from './actions';
let thisRef;
let zIndex;
export let code;
export let component;
export let componentProps;
export let position;
export let parentNode;
export const toggle = function () {
    popperList[code].$destroy();
};
export const hide = function () {
    console.log('hide');
};
export const show = function () {
    console.log('show');
};
export const destroy = function () {
    popperList[code]?.$destroy();
};
let siblings = [];
$: siblings = Array.prototype.slice.call(thisRef?.parentElement?.children ?? []) ?? [];
$: zIndex = siblings?.reduce((prev, val) => {
    // @ts-ignore
    return val?.style?.zIndex >= prev ? val?.style?.zIndex + 1 : prev;
}, 0);
</script>

<div
	bind:this={thisRef}
	class="popper"
	use:clickAway={{ action: destroy }}
	use:stickTo={{ parentNode, position: 'TR' }}
>
	<slot>
		{#if component}
			<svelte:component this={component} {...componentProps} />
		{/if}
	</slot>
</div>

<style>.popper {
  z-index: 10000;
  border-radius: var(--css-popper-radius, var(--radius-small));
  overflow: hidden;
  position: absolute;
  box-shadow: var(--box-shad-4);
  background-color: var(--theme-color-background-alpha);
  backdrop-filter: blur(10px);
}</style>
