<svelte:options accessors={true} immutable={true} />

<script>import { getAppWindowStore, windowsStore } from './window.store.js';
import { draggable } from '@neodrag/svelte';
import { onDestroy } from 'svelte';
import IconButton from '../../base/button/IconButton.svelte';
import Button from '../../base/button/Button.svelte';
import Icon from '../../base/icon/Icon.svelte';
/** Id of the component's instance */
export let frameId = '';
/** the title appears on the handle bar */
export let title = '';
/** the secondaryTitle appears below the title */
export let secondaryTitle = '';
/** the description appears somewhere */
export let description = '';
/** boolean to show the window */
export let open = true;
/** state of the window */
export let minimized = true;
export let maximized = true;
/** is on top of others*/
export let active = true;
/** actions triggered on click*/
export let onClose = () => { };
export let onCancel = () => { };
export let onValidate = () => { };
/** default opneing position */
export let defaultPosition = { x: 960, y: 960 };
/** internal use */
export let self = null;
/** reference to the component's DOM container */
let element;
let activeFrame;
let x = defaultPosition?.x ?? 350;
let y = defaultPosition?.y ?? 50;
let appWindowStore;
let appWindow;
let position;
$: appWindowStore = getAppWindowStore(frameId);
if (!$appWindowStore) {
    console.log('nope');
    windowsStore.create({
        frameId
    });
}
$: appWindow = $appWindowStore;
$: position = {
    position: $appWindowStore?.position ?? { x, y }
};
$: if (!appWindow?.open) {
    if ($$props.self)
        $$props.self.$destroy();
}
windowsStore.activeFrame.subscribe((value) => {
    activeFrame = value;
});
const dragOptions = {
    handle: '.handle',
    defaultPosition: { x, y },
    onDragStart: (args) => {
        // updatePos(args);
        appWindowStore.makeOnTop();
    },
    onDrag: (args) => { },
    onDragEnd: (args) => {
        updatePos(args);
    }
};
onDestroy(() => {
    console.log('destroyed !!!');
});
function updatePos(args) {
    appWindowStore.updatePos({
        x: args.offsetX,
        y: args.offsetY
    });
}
function handleClick(args) {
    windowsStore.activeFrame.set(frameId);
    appWindowStore.makeOnTop();
}
function handleClose(args) {
    appWindowStore.remove();
}
</script>

<div
	bind:this={element}
	class="window"
	on:click={handleClick}
	style="z-index:{$appWindowStore?.zIndex}"
	use:draggable={{ ...dragOptions, ...position }}
>
	<div class="bar">
		<div class="pad-ii-2">
			<Icon fontSize="small" icon="linux" />
		</div>
		<div class="handle">{$appWindowStore?.title}</div>
		<div class="iconZone">
			<div>
				<Button naked icon="window-minimize" iconFontSize="small" />
			</div>
			<div>
				<Button naked icon="fa-solid:window-maximize" iconFontSize="small" />
			</div>
			<div>
				<Button naked icon="mdi:close" iconFontSize="small" on:click={handleClose} />
			</div>
		</div>
	</div>
	<div>
		<slot>
			{#if $appWindowStore?.component}
				<svelte:component this={$appWindowStore.component} {...$appWindowStore.componentProps} />
			{/if}
			{#if $appWindowStore?.contentHTML}
				{@html $appWindowStore?.contentHTML}
			{/if}
		</slot>
	</div>
	<div class="buttonZone">
		<Button naked on:click={handleClose}>Close {frameId}</Button>
		<Button on:click={handleClose}>Validate {frameId}</Button>
	</div>
</div>

<style>.window {
  display: block;
  border-radius: 6px;
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 5000;
  max-height: 100%;
}
.window .bar {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #3c3f41;
  color: white;
}
.window .bar .handle {
  flex: 1;
  cursor: pointer;
}
.window .buttonZone {
  padding: 0.5rem;
  display: flex;
  justify-content: end;
  gap: var(--gap-small, 0.5rem);
}

.iconZone {
  display: flex;
}
.iconZone > {
  color: red;
}</style>
