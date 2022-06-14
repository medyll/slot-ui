<script>import IconButton from '../button/IconButton.svelte';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon = 'toggle';
export let parent;
let visibleSate = false;
let thisHolderRef;
let thisRef;
function handleClick(event) {
    visibleSate = !visibleSate;
    const children = parent.children;
    // iterate over all child nodes
    Array.from(children).forEach((li) => {
        //li.style.transform = visibleSate ? 'scale(0,0)' : '';
        li.style.display = visibleSate ? 'none' : '';
    });
    if (visibleSate) {
        parent.appendChild(thisRef);
    }
    else {
        thisHolderRef.appendChild(thisRef);
    }
}
</script>
    <div><IconButton {icon} iconFontSize="small" on:click={handleClick}/></div>
    <div bind:this={thisHolderRef} style="display:none">
        <div bind:this={thisRef} class="flex-h flex-align-middle  root" style="width:100%;flex:1;position: relative">
            <div>
                <IconButton icon="chevron-left" iconFontSize="small" on:click={handleClick}/>
            </div>
            <slot/>
        </div>
    </div>

<style>.root {
  min-width: auto;
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