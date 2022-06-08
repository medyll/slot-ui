<script>import Iconify from '@iconify/iconify';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
import { onDestroy } from 'svelte';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let style = '';
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
const sizes = {
    tiny: 8,
    small: 16,
    medium: 24,
    default: 32,
    large: 48,
    big: 64,
};
export let icon = 'question';
export let iconFamily = 'fa-solid';
export let fontSize = 'small';
onDestroy(() => {
});
</script>
<i class="iconify-inline {className}"
   data-icon="{iconFamily}:{icon}"
   style="font-size:{sizes[fontSize]}px;{style}"></i>
