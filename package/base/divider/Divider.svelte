<script>import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let density = 'default';
export let direction = 'horizontal';
export let extension = 'full';
let extensionClass = {
    full: 'marg-tb-1 ',
    padded: 'marg-tb-1 marg-ii-2',
    centered: 'marg-tb-1 marg-ii-4'
};
function getDensity(density) {
    const denses = {
        none: '0',
        tight: '0.25rem',
        default: '0.5rem',
        kind: '1.5rem',
    };
    return denses[density];
}
let addStyle = '';
switch (direction) {
    case 'horizontal':
        addStyle = `margin:${getDensity(density)} 0`;
        break;
    case 'vertical':
        addStyle = `margin:0 ${getDensity(density)}`;
        break;
}
</script>

<hr bind:this={element}
    class="{extensionClass[extension]} {className}"
    class:vertical={direction==='vertical'}
    style="{addStyle}"
    use:forwardEvents/>

<style>hr {
  border: none;
  border-top: 1px solid var(--theme-color-foreground, red);
  background-color: var(--theme-color-foreground, red);
  display: block;
}
hr.vertical {
  width: 1px;
  height: 50px;
  border-right: 1px solid var(--theme-color-background);
  margin: 0.25rem 0.5rem;
}</style>
