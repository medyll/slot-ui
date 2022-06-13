<script>import List from './List.svelte';
import { onMount } from 'svelte';
import ListItem from './ListItem.svelte';
import { null_to_empty } from 'svelte/internal';
import Icon from '../icon/Icon.svelte';
import IconButton from "../button/IconButton.svelte";
let cc = 0;
let menuList = [];
$: menuList = [
    { primary: 'Account affinities', secondary: 'link account and affinities', icon: 'user', data: { id: 'red' } },
    { primary: 'Account categories', secondary: cc, icon: 'user', data: { id: 'red1' } }
];
function openIn() {
    // ger
}
onMount(() => {
    setInterval(() => {
        cc++;
    }, 1000);
});
</script>

<div >
    <List
            density="default"
            height="150px"
            let:listItem
            listItems={menuList}
            onItemClick={openIn}
            selectorField="id"
            title="Virtualize no slot" />
    <List
            density="default"
            height="150px"
            let:listItem
            listItems={menuList}
            onItemClick={openIn}
            selectorField="id"
            title="Virtualize and slot">
        <ListItem data={listItem.data} density={'default'}>
            <span slot="icon"><Icon fontSize="tiny" icon={listItem?.icon}/></span>
            <span slot="primary">{null_to_empty(listItem?.primary)}</span>
            <span slot="secondary">{null_to_empty(listItem?.secondary)}</span>
            <span slot="action">{null_to_empty(listItem?.action)}</span>
        </ListItem>
    </List>
    <List
            density="default"
            height="150px"
            let:listItem
            listItems={menuList}
            onItemClick={openIn}
            selectorField="id"
            noVirtualize={true}
            title="No Virtualize no slot" />
    <List
            density="default"
            height="150px"
            let:listItem
            listItems={menuList}
            onItemClick={openIn}
            selectorField="id"
            noVirtualize={true}
            title="No Virtualize and slot">
        <ListItem data={listItem.data} density={'default'}>
            <span slot="icon"><Icon fontSize="tiny" icon={listItem?.icon}/></span>
            <span slot="primary">{null_to_empty(listItem?.primary)}</span>
            <span slot="secondary">{null_to_empty(listItem?.secondary)}</span>
            <span slot="action"><IconButton showShip={true} icon="user" /></span>
        </ListItem>
    </List>
</div>
