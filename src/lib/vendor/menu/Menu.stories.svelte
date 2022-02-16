<script lang="ts">
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
  import {createEventDispatcher} from 'svelte';
  import Menu from './Menu.svelte';

  const dispatch = createEventDispatcher();

  const menuData = [
    {text: 'text 1', icon: 'icon'},
    {text: 'text 2', icon: 'icon'},
    {text: 'text 3', icon: 'icon'},
  ];
</script>
<Meta title="Menu"/>
<Template let:args>
    <Menu {...args}/>
</Template>
<Story
        name="density"
        args={{
		        menuList: menuData
	        }}
/>