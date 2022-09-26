<script context="module">import 'iconify-icon';
const sizes = {
    tiny: 8,
    small: 16,
    medium: 24,
    default: 32,
    large: 48,
    big: 64,
    full: 0,
    auto: 0
};
</script>

<script>/*  common slotUi exports*/
let className = '';
export { className as class };
export let style = '';
/*  end slotUi exports*/
export let icon = 'question';
export let iconFamily = 'mdi'; // fa-solid // mdi
export let fontSize = 'small';
export let rotate = false;
export let color = undefined;
$: iconName = icon.includes(':') ? icon : `${iconFamily}:${icon}`;
</script>
 
<iconify-icon
	class={className}
	class:rotate
	style="display:block;font-size:{sizes[fontSize]}px;color:{color};{style}"
	on:click
	icon={iconName}
	{...$$restProps}
/> 
<style global>:global(.rotate) {
  animation: spinner-frames 3s infinite linear;
}

@keyframes -global-spinner-frames {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}</style>
