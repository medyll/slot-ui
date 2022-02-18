<script context="module" >import IconButton from '../button/IconButton.svelte';
</script>

<script >export let icon = 'faToggleOff';
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

<IconButton  iconFontSize="small" on:click={handleClick} {icon} />
<div style="display:none" bind:this={thisHolderRef}>
	<div class="flex-h flex-align-middle" style="width:100%;flex:1;" bind:this={thisRef}>
		<div>
			<IconButton iconFontSize="small"   on:click={handleClick} icon="faChevronLeft" />
		</div>
		<div class="flex-main">
			<slot />
		</div>
	</div>
</div>
