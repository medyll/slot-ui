
<script >import * as All1 from '@fortawesome/free-solid-svg-icons'; // add faSolid
import * as All2 from '@fortawesome/free-brands-svg-icons';
import * as All3 from '@fortawesome/free-regular-svg-icons';
let IconTypes = { ...All1, ...All2, ...All3 };
const sizes = {
    tiny: 8,
    small: 16,
    medium: 24,
    default: 32,
    large: 48,
    big: 64,
};
export let icon = 'faQuestion';
export let fontSize = 'medium';
</script>
<i class="fa {icon}"></i>
<!--<Fa icon={IconTypes[icon]} on:click style="font-size:{sizes[fontSize]}px"/>-->
