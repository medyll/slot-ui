<svelte:options accessors={true} immutable={true} />

<script>import { getAppWindowStore, windowsStore } from "./store.js";
import { draggable } from "@neodrag/svelte";
import { onDestroy, onMount } from "svelte";
import IconButton from "../../base/button/IconButton.svelte";
import Button from "../../base/button/Button.svelte";
import Icon from "../../base/icon/Icon.svelte";
/** Id of the component's instance */
export let frameId = "";
/** the title appears on the handle bar */
export let title = "";
/** boolean to show the window */
export let open = true;
/** state of the window */
export let minimized = false;
export let maximized = true;
/** is on top of others*/
export let active = true;
/** the secondaryTitle appears below the title */
export let secondaryTitle = "";
/** the description appears somewhere */
export let description = "";
/** actions triggered on click*/
export let onClose = () => { };
export let onCancel = () => { };
export let onValidate = () => { };
/** buttons visible in the bottom bar */
export let hideAcceptButton = false;
export let hideCloseButton = false;
/** can be opened with a component */
export let component = undefined;
/** used when props.component is used */
export let componentProps = undefined;
/** content can be set from a html string */
export let contentHTML = undefined;
/** parent of the window */
export let parentNode = undefined;
/** icon used on the left side*/
export let icon = undefined;
export let flow = 'absolute';
/** default opneing position */
export let defaultPosition = { x: 0, y: 0 };
/** internal use */
export let self = null;
let mounted = false;
/** reference to the component's DOM container */
let element;
let activeFrame;
let x = defaultPosition?.x ?? "100px";
let y = defaultPosition?.y ?? "50px";
let appWindowStore;
let position;
$: appWindowStore = getAppWindowStore(frameId);
$: props = {
    frameId,
    title,
    secondaryTitle,
    description,
    open,
    minimized,
    maximized,
    active,
    component,
    componentProps,
    contentHTML,
    onClose,
    onCancel,
    onValidate,
    hideAcceptButton,
    hideCloseButton,
    parentNode,
};
if (!$appWindowStore) {
    windowsStore.create({ ...props });
}
else {
    // windowsStore.update({...props});
}
$: if (appWindowStore && props) {
    if (mounted) {
        console.log("store !!", open);
        windowsStore.update({ ...props });
    }
}
$: position = {
    position: $appWindowStore?.position ?? { x, y },
};
$: if (!$appWindowStore?.open) {
    if ($$props.self)
        $$props.self.$destroy();
}
windowsStore.activeFrame.subscribe((value) => {
    activeFrame = value;
});
const dragOptions = {
    handle: ".handle",
    defaultPosition: { x, y },
    onDragStart: (args) => {
        // updatePos(args);
        appWindowStore.makeOnTop();
    },
    onDrag: (args) => { },
    onDragEnd: (args) => {
        updatePos(args);
    },
};
onDestroy(() => {
    // console.log('destroyed !!!');
});
onMount(() => {
    mounted = true;
    /*  if (element.parentNode !== document.body)
      document.body.appendChild(element); */
});
function updatePos(args) {
    /* $appWindowStore.updatePos({
            x: args.offsetX,
            y: args.offsetY
        }); */
}
function handleClick(args) {
    windowsStore.activeFrame.set(frameId);
    appWindowStore.makeOnTop();
}
function handleClose(args) {
    if ($appWindowStore.onClose) {
        $appWindowStore.onClose();
    }
    appWindowStore.remove();
    if ($$props.self)
        appWindowStore.remove();
}
</script>

<div
  bind:this={element}
  class="window shad-3"
  on:click={handleClick}
  style="position:{flow};z-index:{$appWindowStore?.zIndex};display:{$appWindowStore?.open ? '' : 'none'}"
  use:draggable={{ ...dragOptions, ...position }}>
  {#if $appWindowStore?.open}
    <div class="bar">
      {#if icon}
        <div class="pad-ii-2">
          <Icon fontSize="small" {icon} />
        </div>
      {/if}
      <div class="handle">{$appWindowStore?.title}</div>
      <div class="iconZone">
        <!-- <div>
          <Button naked icon="window-minimize" iconFontSize="small" />
        </div>
        <div>
          <Button naked icon="fa-solid:window-maximize" iconFontSize="small" />
        </div> -->
        <div>
          <Button
            naked
            icon="mdi:close"
            iconFontSize="small"
            on:click={handleClose} />
        </div>
      </div>
    </div>
    <div>
      <slot>
        {#key $appWindowStore?.component}
          {#if $appWindowStore?.component}
            <svelte:component
              this={$appWindowStore.component}
              {...$appWindowStore.componentProps} />
          {/if}
        {/key}
        {#if $appWindowStore?.contentHTML}
          {@html $appWindowStore?.contentHTML}
        {/if}
      </slot>
    </div>

    <div class="buttonZone">
      {#if !hideCloseButton}<Button
          naked
          icon="mdi:close"
          on:click={handleClose}>Close</Button
        >{/if}
      {#if !hideAcceptButton}<Button icon="home" on:click={handleClose}
          >Validate</Button
        >{/if}
    </div>
  {/if}
</div>

<style>.window {
  display: block;
  position: absolute;
  border-radius: 6px;
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 250px;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 70000;
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
