<script>import Box from './Box.svelte';
import Icon from '../icon/Icon.svelte';
import Divider from '../divider/Divider.svelte';
</script>

<Box>
    <span slot="titleSlot">Title of the box</span>
    Content of the box grrte
</Box>
<Divider/>
<Box onClose="cd">
    <Icon fontSize="small" icon="faClock" slot="iconSlot"/>
    <span slot="titleSlot">Title of the box</span>
    Content of the box grrte
</Box>
<Divider/>

<Box hasMenu={true} onClose="cd">
    <Icon fontSize="small" icon="faClock" slot="iconSlot"/>
    <span slot="titleSlot">Title of the box</span>
    <div slot="buttonZoneSlot">
        <button>button</button>
        <button>button</button>
    </div>
    Content of the box<br/>
    with a button
</Box>