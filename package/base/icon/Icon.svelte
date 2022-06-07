<script>import Iconify from '@iconify/iconify';
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
</script>
<i class="iconify-inline"
   data-icon="{iconFamily}:{icon}"
   style="font-size:{sizes[fontSize]}px"></i>
