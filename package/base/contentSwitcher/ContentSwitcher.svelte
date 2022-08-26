<script>import IconButton from '../button/IconButton.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = undefined;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon = 'toggle';
export let iconback = 'chevron-left';
export let parent = undefined;
let visibleSate = false;
let thisRef;
let realParent;
function handleClick(event) {
    visibleSate = !visibleSate;
    if (!element)
        return false;
    const children = realParent.children;
    // iterate over all child nodes
    Array.from(children).forEach((li) => {
        //li.style.transform = visibleSate ? 'scale(0,0)' : '';
        li.style.display = visibleSate ? 'none' : '';
    });
    if (visibleSate) {
        realParent.appendChild(thisRef);
    }
    else {
        element.appendChild(thisRef);
    }
}
$: if (element) {
    if (!parent) {
        realParent = element.parentElement;
    }
    else {
        realParent = parent;
    }
}
</script>

<div style="padding-left: 0.25rem ;"  on:click={handleClick} ><slot name="switcherSlot"><IconButton {icon} iconFontSize="small"  /></slot></div>
<div bind:this={element} style="display:none">
	<div
		bind:this={thisRef}
		class="flex-h flex-align-middle  root"
		style="width:100%;flex:1;position: relative"
	>
		<div>
			<IconButton icon={iconback} iconFontSize="small" on:click={handleClick} />
		</div>
		<slot />
	</div>
</div>

<style>.root {
  min-width: auto;
  max-width: 100%;
  gap: 0.5rem;
  max-width: 100%;
  overflow: var(--slotui-contentswitcher-overflow, hidden);
  position: relative;
}
.root .content {
  position: relative;
  overflow: var(--slotui-contentswitcher-overflow, hidden);
  min-width: auto;
  flex: 1 1 auto;
}</style>
