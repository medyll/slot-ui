<script>import Box from './Box.svelte';
import Icon from '../icon/Icon.svelte';
import Divider from '../divider/Divider.svelte';
import Button from '../button/Button.svelte';
</script>


<Box class="marg">
    <span slot="titleSlot">Title of the box</span>
    Content of the box grrte
</Box>
<Divider/>
<Box  class="marg" onClose="cd">
    <Icon fontSize="small" icon="clock" slot="iconSlot"/>
    <span slot="titleSlot">Title of the box</span>
    Content of the box grrte
</Box>
<Divider/>

<Box hasMenu={true} onClose="cd">
    <Icon fontSize="small" icon="faClock" slot="iconSlot"/>
    <span slot="titleSlot">Title of the box</span>
    <div slot="buttonZoneSlot">
        <Button>button</Button>
        <Button>button</Button>
    </div>
    Content of the box<br/>
    with a button
</Box>
