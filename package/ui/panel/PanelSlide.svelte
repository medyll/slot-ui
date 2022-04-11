<svelte:options accessors={true}
                immutable={true}/>
<script >import { transitions } from '../../effects/transitions';
import { onMount, setContext } from 'svelte';
const { slideOut, slideIn, slideInRtl, slideOutRt } = transitions;
export let open;
let inFunc;
export const actions = {
    open: () => { setVisible(true); },
    close: () => { setVisible(false); },
    toggle: () => { setVisible(!open); },
};
function setVisible(vis) {
    open = vis;
}
</script>

{#if open}
    <div out:slideOutRt="{{duration: 125}}"
         in:slideInRtl="{{duration: 150,delay:150}}"
         class="sidePanel">
        <slot></slot>
    </div>
{/if}

<style >.sidePanel {
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem 2rem;
  width: 100%;
}</style>