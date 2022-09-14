<svelte:options accessors={true} />

<script>import { custom_event } from 'svelte/internal';
import { stickTo } from '../../uses/stickTo/stickTo.js';
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
const actions = {
    show: () => {
        console.log('show');
    },
    destroy: () => {
        console.log('destroy');
        popperList[code]?.$destroy();
    }
};
export const clickedAway = function () {
    const event = custom_event('clickAway', {}, { bubbles: true });
    parentNode?.dispatchEvent(event);
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
// $: console.log(parentNode)
</script>

<slot name="button" />
<div
	bind:this={element}
	class="popper border-4"
	on:popper:close={actions.destroy}
	use:clickAway={{ action: clickedAway }}
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
