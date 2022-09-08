<svelte:options accessors={true} />

<script>import { stickTo } from '../../uses/stickTo/stickTo.js';
import { clickAway } from '../../uses/clickAway/clickAway.js';
import { popperList } from './actions.js';
let element;
let zIndex;
export let code;
export let parentNode;
export let component = undefined;
export let componentProps = {};
export let position = 'B';
export let content = undefined;
export const toggle = function () {
    popperList[code].$destroy();
};
export const hide = function () {
    console.log('hide');
};
export const show = function () {
    console.log('show');
};
const actions = ({
    destroy: () => {
        popperList[code]?.$destroy();
    }
});
/** @deprecated */
export const destroy = function () {
    console.error('deprecated, use actions.destrtoy in caller');
    popperList[code]?.$destroy();
};
let siblings = [];
$: siblings = Array.prototype.slice.call(element?.parentElement?.children ?? []) ?? [];
$: zIndex = siblings?.reduce((prev, val) => {
    // @ts-ignore
    return val?.style?.zIndex >= prev ? val?.style?.zIndex + 1 : prev;
}, 0);
// if no props parentNode, use element.parentNode 
$: if (!parentNode && element)
    parentNode = element?.parentElement ?? document.body;
</script>

<slot name="button" />
<div
	bind:this={element}
	class="popper"
	on:popper:close={actions.destroy}
	use:clickAway={{ action: actions.destroy }}
	use:stickTo={{ parentNode, position: position }}
>
	<slot>
		{#if component}
			<svelte:component this={component} {...componentProps} />
		{/if}
		{#if content}
			{content}
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
  display: inline-block;
  width: auto;
  top: 0;
}</style>
