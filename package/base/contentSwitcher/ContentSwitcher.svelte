
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

<IconButton {icon} iconFontSize="small" on:click={handleClick}/>
<div bind:this={thisHolderRef} style="display:none">
    <div bind:this={thisRef} class="flex-h flex-align-middle" style="width:100%;flex:1;">
        <div>
            <IconButton  icon="chevron-left" iconFontSize="small" on:click={handleClick}/>
        </div>
        <div class="flex-main">
            <slot/>
        </div>
    </div>
</div>
